import { Account } from "@models/AccountInterface";
import { AccountActionTypeName } from "@actions/AccountActions";
import { ReduxActions } from "@actions/ReduxActions";

const initialState: Account = {
    email: "admin@gmail.com",
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
