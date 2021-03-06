import React, { useState, FormEvent, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { OnChangeModel } from "../../models/FormTypes";
import TextInput from "../../common/components/TextInput";
import { login } from "../../actions/AccountActions";
import { Image } from "react-bootstrap";
import { ApiServices } from "../../services/ApiServices";

const Login: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();

    const [formState, setFormState] = useState({
        email: { error: "", value: "" },
        password: { error: "", value: "" },
    });

    function hasFormValueChanged(model: OnChangeModel): void {
        setFormState({
            ...formState,
            [model.field]: { error: model.error, value: model.value },
        });
    }

    async function submit(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        if (isFormInvalid()) {
            return;
        }
        try {
            const response = await ApiServices.login(formState.email.value, formState.password.value);
            console.log(response);
            dispatch(login(formState.email.value, response));
        } catch (e) {
            return;
        }
    }

    function isFormInvalid() {
        return formState.email.error || formState.password.error || !formState.email.value || !formState.password.value;
    }

    function getDisabledClass(): string {
        const isError: boolean = isFormInvalid() as boolean;
        return isError ? "disabled" : "";
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9 ">
                    <div className="card o-hidden border-0 my-5">
                        <div className="card-body p-0 bg-color">
                            <div className="row">
                                <div className={"log"}>
                                    <Image width={300} src={"./logo.png"} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-white mb-4">Log in in to the DMS!</h1>
                                        </div>
                                        <form className="user" onSubmit={submit}>
                                            <div className="form-group">
                                                <TextInput
                                                    id="input_email"
                                                    field="email"
                                                    value={formState.email.value}
                                                    onChange={hasFormValueChanged}
                                                    required={true}
                                                    maxLength={100}
                                                    label="Email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <TextInput
                                                    id="input_password"
                                                    field="password"
                                                    value={formState.password.value}
                                                    onChange={hasFormValueChanged}
                                                    required={true}
                                                    maxLength={100}
                                                    type="password"
                                                    label="Password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label label" htmlFor="customCheck">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <button className={`btn btn-primary btn-user btn-block ${getDisabledClass()}`} type="submit">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
