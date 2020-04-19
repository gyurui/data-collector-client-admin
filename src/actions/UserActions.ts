import { User } from "@models/UserInterface";

export enum UserActionsTypeName {
    addAdmin = "ADD_ADMIN",
    removeAdmin = "REMOVE_ADMIN",
}

export function addAdmin(user: User): AddAdminActionType {
    return { type: UserActionsTypeName.addAdmin, user: user };
}

export function removeAdmin(user: User): RemoveAdminActionType {
    return { type: UserActionsTypeName.removeAdmin, user: user };
}

interface AddAdminActionType {
    type: UserActionsTypeName.addAdmin;
    user: User;
}
interface RemoveAdminActionType {
    type: UserActionsTypeName.removeAdmin;
    user: User;
}

export type UserActions = AddAdminActionType | RemoveAdminActionType;
