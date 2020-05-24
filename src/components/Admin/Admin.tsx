import React, { Dispatch, useEffect, Fragment } from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import TopMenu from "../TopMenu/TopMenu";
import { Switch, Route } from "react-router";
import Users from "../Users/Users";
import Home from "../Dashboard/Home";
import Notifications from "../../common/components/Notification";
import Measurements from "../Measurements/Measurements";
import { ApiServices } from "../../services/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { StateType } from "../../models/RootInterface";
import Reports from "../Reports/Reports";

const Admin: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    const token: string = useSelector((state: StateType) => state.account.token);

    useEffect(() => {
        ApiServices.getUsers(dispatch, token);
        ApiServices.getMeasurements(dispatch);
    });

    return (
        <Fragment>
            <Notifications />
            <LeftMenu />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopMenu />
                    <div className="container-fluid">
                        <Switch>
                            <Route path={"/users"}>
                                <Users />
                            </Route>
                            <Route path={"/measurements"}>
                                <Measurements />
                            </Route>
                            <Route path={"/reports"}>
                                <Reports />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Admin;
