import { NotificationState } from "../models/RootInterface";
import { ReduxActions } from "../actions/ReduxActions";
import { NotificationsActionTypeName } from "../actions/NotificationsActions";

const initialState: NotificationState = {
    notifications: [{ id: 1, date: new Date(), text: "Hello new user", title: "Welcome" }],
};

function notificationReducer(state: NotificationState = initialState, action: ReduxActions): NotificationState {
    switch (action.type) {
        case NotificationsActionTypeName.addNotification: {
            let maxId: number = Math.max(...state.notifications.map((o) => o.id));
            if (maxId === -Infinity) {
                maxId = 0;
            }
            const newItem = {
                id: maxId + 1,
                date: new Date(),
                title: action.title,
                text: action.text,
            };
            return { ...state, notifications: [...state.notifications, newItem] };
        }
        case NotificationsActionTypeName.removeNotification: {
            return {
                ...state,
                notifications: state.notifications.filter((Notification) => Notification.id !== action.id),
            };
        }
        default:
            return state;
    }
}

export default notificationReducer;
