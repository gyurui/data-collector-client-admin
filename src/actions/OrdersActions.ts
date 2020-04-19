import { Order } from "../models/OrderInterface";

export enum OrdersActionsTypeName {
    addOrder = "ADD_ORDER",
}

export function addOrder(order: Order): AddOrderActionType {
    return { type: OrdersActionsTypeName.addOrder, order: order };
}

interface AddOrderActionType {
    type: OrdersActionsTypeName.addOrder;
    order: Order;
}

export type OrdersActions = AddOrderActionType;
