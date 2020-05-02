import { Product } from "./ProductInterface";

export type OnChangeModel = {
    value: string | number | boolean;
    error: string;
    touched: boolean;
    field: string;
};

export interface FormStateField<T> {
    error: string;
    value: T;
}

export interface ProductFormState {
    name: FormStateField<string>;
    description: FormStateField<string>;
    amount: FormStateField<number>;
    price: FormStateField<number>;
    hasExpiryDate: FormStateField<boolean>;
    category: FormStateField<string>;
}

export interface MeasurementFormState {
    name: FormStateField<string>;
    description: FormStateField<string>;
    ownerUser: FormStateField<string>;
}

export interface OrderFormState {
    name: FormStateField<string>;
    product: FormStateField<Product | null>;
    amount: FormStateField<number>;
    totalPrice: FormStateField<number>;
}
