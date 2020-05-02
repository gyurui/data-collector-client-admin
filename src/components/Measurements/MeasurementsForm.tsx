import React, { useState, FormEvent, Dispatch, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { MeasurementState, StateType, UserState } from "../../models/RootInterface";
import { Measurement, MeasurementModificationStatus } from "../../models/MeasurementInterface";
import { OnChangeModel, MeasurementFormState } from "../../models/FormTypes";
import { addMeasurement, clearSelectedMeasurement, editMeasurement, setModificationState } from "../../actions/MeasurementsActions";
import { addNotification } from "../../actions/NotificationsActions";
import TextInput from "../../common/components/TextInput";
import SelectInput from "../../common/components/Select";
import {ApiServices} from "../../services/ApiServices";

const MeasurementForm: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const measurements: MeasurementState | null = useSelector((state: StateType) => state.measurements);
    const users: UserState = useSelector((state: StateType) => state.users);
    let measurement: Measurement | null = measurements.selectedMeasurement;
    const isCreate: boolean = measurements.modificationState === MeasurementModificationStatus.Create;

    if (!measurement || isCreate) {
        measurement = {
            _id: "0",
            name: "",
            description: "",
            ownerUser: "",
        };
    }

    const [formState, setFormState] = useState({
        name: { error: "", value: measurement.name },
        description: { error: "", value: measurement.description },
        ownerUser: { error: "", value: measurement.ownerUser },
    });

    function hasFormValueChanged(model: OnChangeModel): void {
        setFormState({
            ...formState,
            [model.field]: { error: model.error, value: model.value },
        });
    }

    function saveUser(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (isFormInvalid()) {
            return;
        }

        const saveUserFn: Function = isCreate ? addMeasurement : editMeasurement;
        saveForm(formState, saveUserFn);
    }

    function saveForm(formState: MeasurementFormState, saveFn: Function): void {
        if (measurement) {
            ApiServices.addMeasurement(measurement);

            dispatch(addNotification("Measurement edited", `Measurement ${formState.name.value} edited by you`));
            dispatch(clearSelectedMeasurement());
            dispatch(setModificationState(MeasurementModificationStatus.None));
        }
    }

    function cancelForm(): void {
        dispatch(setModificationState(MeasurementModificationStatus.None));
    }

    function getDisabledClass(): string {
        const isError: boolean = isFormInvalid();
        return isError ? "disabled" : "";
    }

    function isFormInvalid(): boolean {
        return (formState.description.error || formState.name.error || formState.ownerUser.error || !formState.name.value || !formState.ownerUser.value) as boolean;
    }

    return (
        <Fragment>
            <div className="col-xl-7 col-lg-7">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-green">Measurement {isCreate ? "create" : "edit"}</h6>
                    </div>
                    <div className="card-body">
                        <form onSubmit={saveUser}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <TextInput
                                        id="input_name"
                                        value={formState.name.value}
                                        field="name"
                                        onChange={hasFormValueChanged}
                                        required={true}
                                        maxLength={20}
                                        label="Name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <SelectInput
                                        id="input_ownerUser"
                                        field="ownerUser"
                                        label="Owner User"
                                        options={[
                                            ...users.admins.map((user) => {
                                                return user._id;
                                            }),
                                        ]}
                                        required={true}
                                        onChange={hasFormValueChanged}
                                        value={formState.ownerUser.value}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <TextInput
                                    id="input_description"
                                    field="description"
                                    value={formState.description.value}
                                    onChange={hasFormValueChanged}
                                    required={false}
                                    maxLength={100}
                                    label="Description"
                                    placeholder="Description"
                                />
                            </div>
                            <button className="btn btn-danger" onClick={() => cancelForm()}>
                                Cancel
                            </button>
                            <button type="submit" className={`btn btn-success left-margin ${getDisabledClass()}`}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MeasurementForm;
