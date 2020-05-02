import React, { Dispatch, useEffect } from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./common/components/PrivateRoute";
import Admin from "./components/Admin/Admin";
import { AccountRoute } from "./common/components/AccountRoute";
import Login from "./components/Account/Login";
import { ApiServices } from "./services/ApiServices";
import { useDispatch } from "react-redux";
import { ReduxActions } from "./actions/ReduxActions";

const App: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();

    useEffect(() => {
        ApiServices.getUsers(dispatch);
        ApiServices.getMeasurements(dispatch);
    });

    return (
        <div className="App" id="wrapper">
            <Router>
                <Switch>
                    <PrivateRoute path="/">
                        <Admin />
                    </PrivateRoute>
                    <AccountRoute path="/login">
                        <Login />
                    </AccountRoute>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
