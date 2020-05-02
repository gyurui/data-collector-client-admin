import { ReduxActions } from "../actions/ReduxActions";
import { AccountActionTypeName } from "../actions/AccountActions";
import { Account } from "../models/AccountInterface";

const initialState: Account = {
    email: "",
};

function accountReducer(state: Account = initialState, action: ReduxActions): Account {
    switch (action.type) {
        case AccountActionTypeName.logIn: {
            return { ...state, email: action.email };
        }
        case AccountActionTypeName.logOut: {
            return { ...state, email: "" };
        }
        default:
            return state;
    }
}

export default accountReducer;
