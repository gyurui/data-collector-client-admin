import { AccountActions } from "./AccountActions";
import { NotificationsAction } from "./NotificationsActions";
import { RootActions } from "./RootActions";
import { UserActions } from "./UserActions";
import { MeasurementsActions } from "./MeasurementsActions";

export type ReduxActions = AccountActions | NotificationsAction | RootActions | UserActions | MeasurementsActions;
