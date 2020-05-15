import React, { Fragment, Dispatch } from "react";
import { useDispatch } from "react-redux";
import OrderList from "./OrderList";
import OrderForm from "./OrderForm";
import { ReduxActions } from "../../actions/ReduxActions";
import { updateCurrentPath } from "../../actions/RootActions";
import TopCard from "../../common/components/TopCard";
import MeasurementList from "../Measurements/MeasurementsList";
import { Measurement } from "../../models/MeasurementInterface";

const Orders: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();

    dispatch(updateCurrentPath("orders", "list"));
    //dispatch(clearSelectedProduct());

    function selectProduct(meASUREMENT: Measurement): void {
        //dispatch(changeSelectedProduct(product));
    }

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Order</h1>
            <p className="mb-4">Orders here</p>

            <div className="row">
                <TopCard title="TOTAL SALES" text={""} icon="donate" class="primary" />
                <TopCard title="TOTAL AMOUNT" text={""} icon="calculator" class="danger" />
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
                        <MeasurementList onSelect={selectProduct} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Orders;
