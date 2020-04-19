import { AccountActions } from "@actions/AccountActions";
import { NotificationsAction } from "@actions/NotificationsActions";
import { OrdersActions } from "@actions/OrdersActions";
import { ProductsActions } from "@actions/ProductsActions";
import { RootActions } from "@actions/RootActions";
import { UserActions } from "@actions/UserActions";

export type ReduxActions = AccountActions | NotificationsAction | OrdersActions | ProductsActions | RootActions | UserActions;
