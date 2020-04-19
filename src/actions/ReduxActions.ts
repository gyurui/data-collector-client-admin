import { AccountActions } from "./AccountActions";
import { NotificationsAction } from "./NotificationsActions";
import { OrdersActions } from "./OrdersActions";
import { ProductsActions } from "./ProductsActions";
import { RootActions } from "./RootActions";
import { UserActions } from "./UserActions";

export type ReduxActions = AccountActions | NotificationsAction | OrdersActions | ProductsActions | RootActions | UserActions;
