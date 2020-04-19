import { Route, Redirect, RouteProps } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "@models/RootInterface";
import { Account } from "@models/AccountInterface";
import Login from "@components/Account/Login";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AccountRoute({ children, ...rest }: RouteProps): JSX.Element {
    const account: Account = useSelector((state: StateType) => state.account);

    return (
        <Route
            {...rest}
            render={() =>
                account.email ? (
                    <Redirect
                        to={{
                            pathname: "/admin/home",
                        }}
                    />
                ) : (
                    <Login />
                )
            }
        />
    );
}
