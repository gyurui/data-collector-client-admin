import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { StateType } from "../../models/RootInterface";
import { removeNotification } from "../../actions/NotificationsActions";
import { Notification } from "../../models/NotificationInterface";

const Notifications: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const notifications: Notification[] = useSelector((state: StateType) => state.notifications.notifications);

    function closeNotification(id: number) {
        dispatch(removeNotification(id));
    }

    const notificationList = notifications.map((notification) => {
        return (
            <div className="toast" key={`notification_${notification.id}`}>
                <div className="toast-header">
                    <i className="fas fa-fw fa-bell" />
                    <strong className="mr-auto">{notification.title}</strong>
                    <small>
                        {notification.date.toLocaleTimeString(navigator.language, {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={() => closeNotification(notification.id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">{notification.text}</div>
            </div>
        );
    });

    return <div className="toast-wrapper">{notificationList}</div>;
};

export default Notifications;
