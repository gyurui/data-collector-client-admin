import { User } from "../models/UserInterface";

export enum UserActionsTypeName {
    addUsers = "ADD_USERS",
    addAdmin = "ADD_ADMIN",
    removeAdmin = "REMOVE_ADMIN",
}

export function addUsers(users: User[]): AddUsersActionType {
    return { type: UserActionsTypeName.addUsers, users };
}

export function addAdmin(user: User): AddAdminActionType {
    return { type: UserActionsTypeName.addAdmin, user: user };
}

export function removeAdmin(user: User): RemoveAdminActionType {
    return { type: UserActionsTypeName.removeAdmin, user: user };
}

interface AddUsersActionType {
    type: UserActionsTypeName.addUsers;
    users: User[];
}

interface AddAdminActionType {
    type: UserActionsTypeName.addAdmin;
    user: User;
}

interface RemoveAdminActionType {
    type: UserActionsTypeName.removeAdmin;
    user: User;
}

export type UserActions = AddUsersActionType | AddAdminActionType | RemoveAdminActionType;
