import { combineReducers, Reducer } from "redux";
import { UPDATE_CURRENT_PATH } from "../actions/RootActions";
import { IRootStateType, IActionBase, IStateType } from "../models/root.interface";
import productsReducer from "./ProductsReducer";
import notificationReducer from "./NotificationReducer";
import userReducer from "./UsersReducer";
import orderReducer from "./OrderReducer";
import accountReducer from "./AccountReducer";


const initialState: IRootStateType = {
    page: {area: "home", subArea: ""}
};

function rootReducer(state: IRootStateType = initialState, action: IActionBase): IRootStateType {
    switch (action.type) {
        case UPDATE_CURRENT_PATH:
            return { ...state, page: {area: action.area, subArea: action.subArea}};
        default:
            return state;
    }
}

const rootReducers: Reducer<IStateType> = combineReducers({root: rootReducer,
    products: productsReducer,
    notifications: notificationReducer,
    users: userReducer,
    orders: orderReducer,
    account: accountReducer
});



export default rootReducers;
