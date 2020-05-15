import { Measurement, MeasurementModificationStatus } from "../models/MeasurementInterface";

export enum MeasurementsActionsTypeName {
    addMeasurements = "ADD_MEASUREMENTS",
    addMeasurement = "ADD_MEASUREMENT",
    editMeasurement = "EDIT_MEASUREMENT",
    removeMeasurement = "REMOVE_MEASUREMENT",
    changeMeasurementPendingEdit = "CHANGE_MEASUREMENT_PENDING_EDIT",
    clearMeasurementPendingEdit = "CLEAR_MEASUREMENT_PENDING_EDIT",
    setModificationState = "SET_MEASUREMENT_MODIFICATION_STATE",
}

export function addMeasurements(measurements: Measurement[]): AddMeasurementsActionType {
    return { type: MeasurementsActionsTypeName.addMeasurements, measurements };
}
export function addMeasurement(measurement: Measurement): AddMeasurementActionType {
    return { type: MeasurementsActionsTypeName.addMeasurement, measurement: measurement };
}

export function editMeasurement(measurement: Measurement): EditMeasurementActionType {
    return { type: MeasurementsActionsTypeName.editMeasurement, measurement: measurement };
}

export function removeMeasurement(id: string): RemoveMeasurementActionType {
    return { type: MeasurementsActionsTypeName.removeMeasurement, _id: id };
}

export function changeSelectedMeasurement(measurement: Measurement): ChangeSelectedMeasurementActionType {
    return { type: MeasurementsActionsTypeName.changeMeasurementPendingEdit, measurement: measurement };
}

export function clearSelectedMeasurement(): ClearSelectedMeasurementActionType {
    return { type: MeasurementsActionsTypeName.clearMeasurementPendingEdit };
}

export function setModificationState(value: MeasurementModificationStatus): SetModificationStateActionType {
    return { type: MeasurementsActionsTypeName.setModificationState, value: value };
}

interface AddMeasurementsActionType {
    type: MeasurementsActionsTypeName.addMeasurements;
    measurements: Measurement[];
}

interface AddMeasurementActionType {
    type: MeasurementsActionsTypeName.addMeasurement;
    measurement: Measurement;
}

interface EditMeasurementActionType {
    type: MeasurementsActionsTypeName.editMeasurement;
    measurement: Measurement;
}
interface RemoveMeasurementActionType {
    type: MeasurementsActionsTypeName.removeMeasurement;
    _id: string;
}
interface ChangeSelectedMeasurementActionType {
    type: MeasurementsActionsTypeName.changeMeasurementPendingEdit;
    measurement: Measurement;
}
interface ClearSelectedMeasurementActionType {
    type: MeasurementsActionsTypeName.clearMeasurementPendingEdit;
}
interface SetModificationStateActionType {
    type: MeasurementsActionsTypeName.setModificationState;
    value: MeasurementModificationStatus;
}

export type MeasurementsActions =
    | AddMeasurementsActionType
    | AddMeasurementActionType
    | EditMeasurementActionType
    | RemoveMeasurementActionType
    | ChangeSelectedMeasurementActionType
    | ClearSelectedMeasurementActionType
    | SetModificationStateActionType;
