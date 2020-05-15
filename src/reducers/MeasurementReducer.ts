import { MeasurementState } from "../models/RootInterface";
import { Measurement, MeasurementModificationStatus } from "../models/MeasurementInterface";
import { MeasurementsActionsTypeName } from "../actions/MeasurementsActions";
import { ReduxActions } from "../actions/ReduxActions";

const initialState: MeasurementState = {
    modificationState: MeasurementModificationStatus.None,
    selectedMeasurement: null,
    measurements: [
        {
            _id: "1",
            name: "Chocolate",
            description: "This is Chocolate and it is Sweet",
            ownerUser: "3",
        },
    ],
};

function measurementsReducer(state: MeasurementState = initialState, action: ReduxActions): MeasurementState {
    switch (action.type) {
        case MeasurementsActionsTypeName.addMeasurements: {
            return { ...state, measurements: action.measurements };
        }
        case MeasurementsActionsTypeName.addMeasurement: {
            return { ...state, measurements: [...state.measurements, action.measurement] };
        }
        case MeasurementsActionsTypeName.editMeasurement: {
            const foundIndex: number = state.measurements.findIndex((pr) => pr._id === action.measurement._id);
            const measurements: Measurement[] = state.measurements;
            measurements[foundIndex] = action.measurement;
            return { ...state, measurements: measurements };
        }
        case MeasurementsActionsTypeName.removeMeasurement: {
            return {
                ...state,
                measurements: state.measurements.filter((pr) => pr._id !== action._id),
            };
        }
        case MeasurementsActionsTypeName.changeMeasurementPendingEdit: {
            return { ...state, selectedMeasurement: action.measurement };
        }
        case MeasurementsActionsTypeName.clearMeasurementPendingEdit: {
            return { ...state, selectedMeasurement: null };
        }
        case MeasurementsActionsTypeName.setModificationState: {
            return { ...state, modificationState: action.value };
        }
        default:
            return state;
    }
}

export default measurementsReducer;
