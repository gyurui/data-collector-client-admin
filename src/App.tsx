import React from "react";
import { Route } from "react-router";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./common/components/PrivateRoute";
import Admin from "./components/Admin/Admin";
import Template from "./components/Template/Template";

const App: React.FC = () => {
    return (
        <div className="App" id="wrapper">
            <Router>
                <Switch>
                    <Route path="/template">
                        <Template />
                    </Route>
                    <PrivateRoute path="/">
                        <Admin />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
