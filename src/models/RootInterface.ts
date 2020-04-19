import { Product, ProductModificationStatus } from "./ProductInterface";
import { Notification } from "./NotificationInterface";
import { User } from "./UserInterface";
import { Order } from "./OrderInterface";
import { Account } from "./AccountInterface";

export interface RootPageStateType {
    area: string;
    subArea: string;
}

export interface RootStateType {
    page: RootPageStateType;
}
export interface StateType {
    root: RootStateType;
    products: ProductState;
    notifications: NotificationState;
    users: UserState;
    orders: OrdersState;
    account: Account;
}

export interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    modificationState: ProductModificationStatus;
}

export interface OrdersState {
    orders: Order[];
}

export interface NotificationState {
    notifications: Notification[];
}

export interface UserState {
    users: User[];
    admins: User[];
}
