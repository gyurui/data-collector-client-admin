import { combineReducers, Reducer } from "redux";
import productsReducer from "./ProductsReducer";
import notificationReducer from "./NotificationReducer";
import userReducer from "./UsersReducer";
import orderReducer from "./OrderReducer";
import accountReducer from "./AccountReducer";
import { RootStateType, StateType } from "../models/RootInterface";
import { ReduxActions } from "../actions/ReduxActions";
import { RootActionsTypesName } from "../actions/RootActions";

const initialState: RootStateType = {
    page: { area: "home", subArea: "" },
};

function rootReducer(state: RootStateType = initialState, action: ReduxActions): RootStateType {
    switch (action.type) {
        case RootActionsTypesName.updateCurrentPath:
            return { ...state, page: { area: action.area, subArea: action.subArea } };
        default:
            return state;
    }
}

const rootReducers: Reducer<StateType> = combineReducers({
    root: rootReducer,
    products: productsReducer,
    notifications: notificationReducer,
    users: userReducer,
    orders: orderReducer,
    account: accountReducer,
});

export default rootReducers;
