import { Product } from "./ProductInterface";

export interface Order {
    id: number;
    name: string;
    product: Product;
    amount: number;
    totalPrice: number;
}
