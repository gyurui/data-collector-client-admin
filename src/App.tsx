import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./common/components/PrivateRoute";
import Admin from "./components/Admin/Admin";
import { AccountRoute } from "./common/components/AccountRoute";
import Login from "./components/Account/Login";

const App: React.FC = () => {

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
