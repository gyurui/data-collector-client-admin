import React, { Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { updateCurrentPath } from "../../actions/RootActions";
import TopCard from "../../common/components/TopCard";
import MeasurementList from "../Measurements/MeasurementsList";
import { Jumbotron } from "react-bootstrap";
import { MeasurementState, StateType } from "../../models/RootInterface";

const Home: React.FC = () => {
    const measurements: MeasurementState = useSelector((state: StateType) => state.measurements);
    const numberItemsCount: number = measurements.measurements.length;
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    dispatch(updateCurrentPath("home", ""));

    return (
        <Fragment>
            <Jumbotron>
                <h1>Data Measurement Sytem </h1>
                <p>Welcome to the data measurement admin site, this site will generate riports from your actual measurements</p>
            </Jumbotron>
            <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
            <p className="mb-4">Summary and overview of our admin stuff here</p>

            <div className="row">
                <TopCard title="MEASUREMENTS COUNT" text={`${numberItemsCount}`} icon="warehouse" class="primary" />
                <TopCard title="REPORTS COUNT" text={"0"} icon="box" class="danger" />
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-green">Measurement list</h6>
                        </div>
                        <div className="card-body">
                            <MeasurementList />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
