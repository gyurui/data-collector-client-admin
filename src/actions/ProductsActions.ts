import { Product, ProductModificationStatus } from "@models/ProductInterface";

export enum ProductsActionsTypeName {
    addProduct = "ADD_PRODUCT",
    editProduct = "EDIT_PRODUCT",
    removeProduct = "REMOVE_PRODUCT",
    changeProductAmount = "CHANGE_PRODUCT_AMOUNT",
    changeProductPendingEdit = "CHANGE_PRODUCT_PENDING_EDIT",
    clearProductPendingEdit = "CLEAR_PRODUCT_PENDING_EDIT",
    setModificationState = "SET_MODIFICATION_STATE",
}

export function addProduct(product: Product): AddProductActionType {
    return { type: ProductsActionsTypeName.addProduct, product: product };
}

export function editProduct(product: Product): EditProductActionType {
    return { type: ProductsActionsTypeName.editProduct, product: product };
}

export function removeProduct(id: number): RemoveProductActionType {
    return { type: ProductsActionsTypeName.removeProduct, id: id };
}

export function changeProductAmount(id: number, amount: number): ChangeProductAmountType {
    return { type: ProductsActionsTypeName.changeProductAmount, id: id, amount: amount };
}

export function changeSelectedProduct(product: Product): ChangeSelectedProductActionType {
    return { type: ProductsActionsTypeName.changeProductPendingEdit, product: product };
}

export function clearSelectedProduct(): ClearSelectedProductActionType {
    return { type: ProductsActionsTypeName.clearProductPendingEdit };
}

export function setModificationState(value: ProductModificationStatus): SetModificationStateActionType {
    return { type: ProductsActionsTypeName.setModificationState, value: value };
}

interface AddProductActionType {
    type: ProductsActionsTypeName.addProduct;
    product: Product;
}
interface EditProductActionType {
    type: ProductsActionsTypeName.editProduct;
    product: Product;
}
interface RemoveProductActionType {
    type: ProductsActionsTypeName.removeProduct;
    id: number;
}
interface ChangeSelectedProductActionType {
    type: ProductsActionsTypeName.changeProductPendingEdit;
    product: Product;
}
interface ClearSelectedProductActionType {
    type: ProductsActionsTypeName.clearProductPendingEdit;
}
interface SetModificationStateActionType {
    type: ProductsActionsTypeName.setModificationState;
    value: ProductModificationStatus;
}
interface ChangeProductAmountType {
    type: ProductsActionsTypeName.changeProductAmount;
    id: number;
    amount: number;
}

export type ProductsActions =
    | AddProductActionType
    | EditProductActionType
    | RemoveProductActionType
    | ChangeSelectedProductActionType
    | ClearSelectedProductActionType
    | SetModificationStateActionType
    | ChangeProductAmountType;
