import React, { Fragment, Dispatch, useState, useEffect } from "react";
import MeasurementList from "./MeasurementsList";
import MeasurementForm from "./MeasurementsForm";
import "./Measurements.css";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { ReduxActions } from "../../actions/ReduxActions";
import { MeasurementState, RootPageStateType, StateType } from "../../models/RootInterface";
import { changeSelectedMeasurement, clearSelectedMeasurement, removeMeasurement, setModificationState } from "../../actions/MeasurementsActions";
import { updateCurrentPath } from "../../actions/RootActions";
import { Measurement, MeasurementModificationStatus } from "../../models/MeasurementInterface";
import TopCard from "../../common/components/TopCard";
import { addNotification } from "../../actions/NotificationsActions";
import { ApiServices } from "../../services/ApiServices";

const Measurements: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const measurements: MeasurementState = useSelector((state: StateType) => state.measurements);
    const path: RootPageStateType = useSelector((state: StateType) => state.root.page);
    const numberItemsCount: number = measurements.measurements.length;
    const [popup, setPopup] = useState(false);
    const [started, setStarted] = useState(false);
    const [fetchedData, setFetchedData] = useState("");
    let timerId: any = null;

    useEffect(() => {
        //dispatch(clearSelectedMeasurement());
        dispatch(updateCurrentPath("measurements", "list"));
    }, [path.area, dispatch]);

    function onMeasurementSelect(measurement: Measurement): void {
        dispatch(changeSelectedMeasurement(measurement));
        dispatch(setModificationState(MeasurementModificationStatus.None));
    }

    function onMeasurementRemove() {
        if (measurements.selectedMeasurement) {
            setPopup(true);
        }
    }

    const downloadData = async () => {
        const data = await ApiServices.getData();
        setFetchedData(data);
    };

    const startMeasurementFn = () => {
        if (measurements.selectedMeasurement) {
            setStarted(true);
            ApiServices.startMeasurement(measurements.selectedMeasurement);
            timerId = setInterval(() => {
                downloadData();
            }, 1000);
        }
    };

    function stopMeasurementFn() {
        if (measurements.selectedMeasurement) {
            setStarted(false);
            ApiServices.clearMeasurement();
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
        }
    }

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Measurements</h1>
            <p className="mb-4">Measurements here</p>
            <div className="row">
                <TopCard title="MEASUREMENTS COUNT" text={`${numberItemsCount}`} icon="box" class="primary" />
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-green">Measurement List</h6>
                            <div className="header-buttons">
                                <button className="btn btn-success btn-green" onClick={() => dispatch(setModificationState(MeasurementModificationStatus.Create))}>
                                    <i className="fas fa fa-plus" />
                                </button>
                                <button className="btn btn-success btn-blue" onClick={() => dispatch(setModificationState(MeasurementModificationStatus.Edit))}>
                                    <i className="fas fa fa-pen" />
                                </button>
                                <button className="btn btn-success btn-red" onClick={() => onMeasurementRemove()}>
                                    <i className="fas fa fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <MeasurementList onSelect={onMeasurementSelect} />
                        </div>
                    </div>
                </div>
                {measurements.modificationState === MeasurementModificationStatus.Create ||
                (measurements.modificationState === MeasurementModificationStatus.Edit && measurements.selectedMeasurement) ? (
                    <MeasurementForm />
                ) : null}
                {measurements.selectedMeasurement && !started && (
                    <div className="card-body">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                                startMeasurementFn();
                            }}
                        >
                            Start Measurement
                        </button>
                    </div>
                )}
                {measurements.selectedMeasurement && started && (
                    <div className="card-body">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                                stopMeasurementFn();
                            }}
                        >
                            Stop Measurement
                        </button>
                        <div>
                            <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
                        </div>
                    </div>
                )}
            </div>

            <Popup className="popup-modal" open={popup} onClose={() => setPopup(false)} closeOnDocumentClick>
                <div className="popup-modal">
                    <div className="popup-title">Are you sure?</div>
                    <div className="popup-content">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                if (!measurements.selectedMeasurement) {
                                    return;
                                }
                                dispatch(addNotification("Measurement removed", `Measurement ${measurements.selectedMeasurement.name} was removed`));
                                dispatch(removeMeasurement(measurements.selectedMeasurement._id));
                                dispatch(clearSelectedMeasurement());
                                setPopup(false);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </Popup>
        </Fragment>
    );
};

export default Measurements;
