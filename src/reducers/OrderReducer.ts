import { OrdersState } from "@models/RootInterface";
import { ReduxActions } from "@actions/ReduxActions";
import { OrdersActionsTypeName } from "@actions/OrdersActions";

const initialState: OrdersState = {
    orders: [
        {
            id: 1,
            name: "Apple order",
            amount: 12,
            totalPrice: 100,
            product: {
                id: 2,
                name: "Apple",
                description: "This is Apple and it is healthy",
                amount: 5,
                price: 2,
                hasExpiryDate: true,
                category: "Fruit",
            },
        },
        {
            id: 2,
            name: "Straw order",
            amount: 7,
            totalPrice: 7,
            product: {
                id: 3,
                name: "Straw",
                description: "This is Straw and you can use it for your drink",
                amount: 100,
                price: 1,
                hasExpiryDate: false,
                category: "Kitchen",
            },
        },
    ],
};

function orderReducer(state: OrdersState = initialState, action: ReduxActions): OrdersState {
    switch (action.type) {
        case OrdersActionsTypeName.addOrder: {
            let maxId: number = Math.max(
                ...state.orders.map((o) => {
                    return o.id;
                }),
            );
            if (maxId === -Infinity) {
                maxId = 0;
            }
            return {
                ...state,
                orders: [...state.orders, { ...action.order, id: maxId + 1 }],
            };
        }
        default:
            return state;
    }
}

export default orderReducer;
