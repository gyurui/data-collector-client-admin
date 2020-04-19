import { ProductState } from "../models/RootInterface";
import { Product, ProductModificationStatus } from "../models/ProductInterface";
import { ProductsActionsTypeName } from "../actions/ProductsActions";
import { ReduxActions } from "../actions/ReduxActions";

const initialState: ProductState = {
    modificationState: ProductModificationStatus.None,
    selectedProduct: null,
    products: [
        {
            id: 1,
            name: "Chocolate",
            description: "This is Chocolate and it is Sweet",
            amount: 10,
            price: 4,
            hasExpiryDate: true,
            category: "Sweet",
        },
        {
            id: 2,
            name: "Apple",
            description: "This is Apple and it is healthy",
            amount: 5,
            price: 2,
            hasExpiryDate: true,
            category: "Fruit",
        },
        {
            id: 3,
            name: "Straw",
            description: "This is Straw and you can use it for your drink",
            amount: 100,
            price: 1,
            hasExpiryDate: false,
            category: "Kitchen",
        },
        {
            id: 4,
            name: "Spoon",
            description: "This is Spoon and it is useful while eating",
            amount: 3,
            price: 2,
            hasExpiryDate: false,
            category: "Kitchen",
        },
        {
            id: 5,
            name: "Sugar",
            description: "This is Sugar and it is to make your life sweet",
            amount: 15,
            price: 5,
            hasExpiryDate: true,
            category: "Sweet",
        },
    ],
};

function productsReducer(state: ProductState = initialState, action: ReduxActions): ProductState {
    switch (action.type) {
        case ProductsActionsTypeName.addProduct: {
            const maxId: number = Math.max(
                ...state.products.map((o) => {
                    return o.id;
                }),
            );
            action.product.id = maxId + 1;
            return { ...state, products: [...state.products, action.product] };
        }
        case ProductsActionsTypeName.editProduct: {
            const foundIndex: number = state.products.findIndex((pr) => pr.id === action.product.id);
            const products: Product[] = state.products;
            products[foundIndex] = action.product;
            return { ...state, products: products };
        }
        case ProductsActionsTypeName.removeProduct: {
            return {
                ...state,
                products: state.products.filter((pr) => pr.id !== action.id),
            };
        }
        case ProductsActionsTypeName.changeProductPendingEdit: {
            return { ...state, selectedProduct: action.product };
        }
        case ProductsActionsTypeName.clearProductPendingEdit: {
            return { ...state, selectedProduct: null };
        }
        case ProductsActionsTypeName.setModificationState: {
            return { ...state, modificationState: action.value };
        }
        case ProductsActionsTypeName.changeProductAmount: {
            const foundIndex: number = state.products.findIndex((pr) => pr.id === action.id);
            const products: Product[] = state.products;
            products[foundIndex].amount = products[foundIndex].amount - action.amount;
            return { ...state, products: products };
        }
        default:
            return state;
    }
}

export default productsReducer;
