import React, { Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "./OrderList";
import OrderForm from "./OrderForm";
import ProductList from "../Products/ProductsList";
import { ReduxActions } from "../../actions/ReduxActions";
import { Order } from "../../models/OrderInterface";
import { StateType } from "../../models/RootInterface";
import { updateCurrentPath } from "../../actions/RootActions";
import { changeSelectedProduct, clearSelectedProduct } from "../../actions/ProductsActions";
import { Product } from "../../models/ProductInterface";
import TopCard from "../../common/components/TopCard";

const Orders: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const orders: Order[] = useSelector((state: StateType) => state.orders.orders);
    const totalSales: number = orders.reduce((prev, next) => prev + next.totalPrice, 0);
    const totalAmount: number = orders.reduce((prev, next) => prev + next.amount, 0);
    dispatch(updateCurrentPath("orders", "list"));
    dispatch(clearSelectedProduct());

    function selectProduct(product: Product): void {
        dispatch(changeSelectedProduct(product));
    }

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Order</h1>
            <p className="mb-4">Orders here</p>

            <div className="row">
                <TopCard title="TOTAL SALES" text={totalSales.toString()} icon="donate" class="primary" />
                <TopCard title="TOTAL AMOUNT" text={totalAmount.toString()} icon="calculator" class="danger" />
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-green">Order List</h6>
                            <div className="header-buttons" />
                        </div>
                        <div className="card-body">
                            <OrderList />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <OrderForm />
                </div>
                <div className="col-md-6">
                    <div className="card card-bottom-list shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-green">Product list</h6>
                        </div>
                        <ProductList onSelect={selectProduct} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Orders;
