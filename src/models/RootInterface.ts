import { Product, ProductModificationStatus } from "./ProductInterface";
import { Notification } from "./NotificationInterface";
import { User } from "./UserInterface";
import { Order } from "./OrderInterface";
import { Account } from "./AccountInterface";
import { Measurement, MeasurementModificationStatus } from "./MeasurementInterface";

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
    measurements: MeasurementState;
}

export interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    modificationState: ProductModificationStatus;
}

export interface MeasurementState {
    measurements: Measurement[];
    selectedMeasurement: Measurement | null;
    modificationState: MeasurementModificationStatus;
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
