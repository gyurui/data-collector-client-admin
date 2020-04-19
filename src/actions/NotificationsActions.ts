export enum NotificationsActionTypeName {
    addNotification = "ADD_NOTIFICATION",
    removeNotification = "REMOVE_NOTIFICATION",
}

export function addNotification(title: string, text: string): AddNotificationActionType {
    return { type: NotificationsActionTypeName.addNotification, text: text, title: title };
}

export function removeNotification(id: number): RemoveNotificationActionType {
    return { type: NotificationsActionTypeName.removeNotification, id: id };
}

interface AddNotificationActionType {
    type: NotificationsActionTypeName.addNotification;
    text: string;
    title: string;
}

interface RemoveNotificationActionType {
    type: NotificationsActionTypeName.removeNotification;
    id: number;
}

export type NotificationsAction = AddNotificationActionType | RemoveNotificationActionType;
