import { ReduxActions } from "../actions/ReduxActions";
import { AccountActionTypeName } from "../actions/AccountActions";
import { Account } from "../models/AccountInterface";

const initialState: Account = {
    email: "",
    token: "",
};

function accountReducer(state: Account = initialState, action: ReduxActions): Account {
    switch (action.type) {
        case AccountActionTypeName.logIn: {
            return { ...state, email: action.email, token: action.token };
        }
        case AccountActionTypeName.logOut: {
            return { ...state, email: "", token: "" };
        }
        default:
            return state;
    }
}

export default accountReducer;
