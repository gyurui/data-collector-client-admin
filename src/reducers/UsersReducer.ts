import { UserState } from "../models/RootInterface";
import { ReduxActions } from "../actions/ReduxActions";
import { UserActionsTypeName } from "../actions/UserActions";

const initialState: UserState = {
    admins: [
        { _id: "1", firstName: "John", lastName: "Smith", email: "jsmith@em.pl" },
        { _id: "2", firstName: "Jannice", lastName: "Bing", email: "ohmy@fr.pl" },
    ],
    users: [{ _id: "3", firstName: "Jannet", lastName: "Crock", email: "jcrock@em.pl" }],
};

function userReducer(state: UserState = initialState, action: ReduxActions): UserState {
    switch (action.type) {
        case UserActionsTypeName.addUsers: {
            return {
                ...state,
                admins: action.users,
            };
        }
        case UserActionsTypeName.addAdmin: {
            return {
                ...state,
                users: state.users.filter((x) => x._id !== action.user._id),
                admins: [...state.admins, action.user],
            };
        }
        case UserActionsTypeName.removeAdmin: {
            return {
                ...state,
                admins: state.admins.filter((x) => x._id !== action.user._id),
                users: [...state.users, action.user],
            };
        }
        default:
            return state;
    }
}

export default userReducer;
