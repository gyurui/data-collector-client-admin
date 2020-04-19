import { Route, RouteProps } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../models/RootInterface";
import Login from "../../components/Account/Login";
import { Account } from "../../models/AccountInterface";

export function PrivateRoute({ children, ...rest }: RouteProps): JSX.Element {
    const account: Account = useSelector((state: StateType) => state.account);

    return <Route {...rest} render={() => (account.email ? children : <Login />)} />;
}
