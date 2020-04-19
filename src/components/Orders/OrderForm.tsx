import React, { useState, FormEvent, Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { Product } from "../../models/ProductInterface";
import { StateType } from "../../models/RootInterface";
import { OnChangeModel, OrderFormState } from "../../models/FormTypes";
import { addOrder } from "../../actions/OrdersActions";
import { addNotification } from "../../actions/NotificationsActions";
import { changeProductAmount, clearSelectedProduct } from "../../actions/ProductsActions";
import TextInput from "../../common/components/TextInput";
import NumberInput from "../../common/components/NumberInput";

const OrderForm: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const selectedProduct: Product | null = useSelector((state: StateType) => state.products.selectedProduct);
    const initialFormState: OrderFormState = {
        name: { error: "", value: "" },
        product: { error: "", value: null },
        amount: { error: "", value: 0 },
        totalPrice: { error: "", value: 0 },
    };

    const [formState, setFormState] = useState(initialFormState);

    function hasAmountChanged(model: OnChangeModel): void {
        let totalPrice: number = formState.totalPrice.value;
        if (selectedProduct) {
            totalPrice = selectedProduct.price * (model.value as number);
        }

        setFormState({
            ...formState,
            amount: { error: model.error, value: model.value as number },
            totalPrice: { error: model.error, value: totalPrice },
        });
    }

    function hasFormValueChanged(model: OnChangeModel): void {
        setFormState({
            ...formState,
            [model.field]: { error: model.error, value: model.value },
        });
    }

    function resetForm(): void {
        setFormState(initialFormState);
    }

    function saveOrder(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (isFormInvalid()) {
            return;
        }

        saveForm(formState);
    }

    function saveForm(formState: OrderFormState): void {
        if (selectedProduct) {
            if (selectedProduct.amount < formState.amount.value) {
                alert("Not enough products in warehouse");
                return;
            }

            formState.product.value = selectedProduct;
            dispatch(
                addOrder({
                    id: 0,
                    name: formState.name.value,
                    amount: formState.amount.value,
                    totalPrice: formState.totalPrice.value,
                    product: formState.product.value as Product,
                }),
            );

            dispatch(addNotification("Order added", `Order ${formState.name.value} added by you`));
            dispatch(clearSelectedProduct());
            dispatch(changeProductAmount(selectedProduct.id, formState.amount.value));
            resetForm();
        }
    }

    function isFormInvalid(): boolean {
        return (formState.amount.error || formState.totalPrice.error || formState.name.error || formState.product.error || !formState.name.value || !selectedProduct) as boolean;
    }

    function getDisabledClass(): string {
        const isError: boolean = isFormInvalid();
        return isError ? "disabled" : "";
    }

    return (
        <Fragment>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-green">Create order</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={saveOrder}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextInput id="input_name" value={formState.name.value} field="name" onChange={hasFormValueChanged} required={true} maxLength={20} label="Name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <NumberInput id="input_amount" value={formState.amount.value} field="amount" onChange={hasAmountChanged} max={1000} min={0} label="Amount" />
                            </div>

                            <div className="form-group col-md-6">
                                <NumberInput id="input_totalPrice" value={formState.totalPrice.value} field="totalPrice" onChange={hasFormValueChanged} max={1000} min={0} label="Price" />
                            </div>
                        </div>
                        <button className="btn btn-danger" onClick={() => resetForm()}>
                            Reset
                        </button>
                        <button type="submit" className={`btn btn-success left-margin ${getDisabledClass()}`}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default OrderForm;