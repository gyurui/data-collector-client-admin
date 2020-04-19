import { UserState } from "@models/RootInterface";
import { UserActionsTypeName } from "@actions/UserActions";
import { ReduxActions } from "@actions/ReduxActions";

const initialState: UserState = {
    users: [
        { id: 1, firstName: "John", lastName: "Smith", email: "jsmith@em.pl" },
        { id: 2, firstName: "Jannice", lastName: "Bing", email: "ohmy@fr.pl" },
    ],
    admins: [{ id: 3, firstName: "Jannet", lastName: "Crock", email: "jcrock@em.pl" }],
};

function userReducer(state: UserState = initialState, action: ReduxActions): UserState {
    switch (action.type) {
        case UserActionsTypeName.addAdmin: {
            return {
                ...state,
                users: state.users.filter((x) => x.id !== action.user.id),
                admins: [...state.admins, action.user],
            };
        }
        case UserActionsTypeName.removeAdmin: {
            return {
                ...state,
                admins: state.admins.filter((x) => x.id !== action.user.id),
                users: [...state.users, action.user],
            };
        }
        default:
            return state;
    }
}

export default userReducer;
