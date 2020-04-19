import React from "react";
import TopMenuAccount from "./TopMenuAccount";
import "./TopMenu.css";
import { useSelector } from "react-redux";
import { RootPageStateType, StateType } from "../../models/RootInterface";

const TopMenu: React.FC = () => {
    const page: RootPageStateType = useSelector((state: StateType) => state.root.page);

    return (
        <nav className="navbar navbar-expand navbar-light bg-custom-dark topbar mb-4 static-top shadow">
            <ol className="breadcrumb dark-breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">{page ? page.area : null}</a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#">{page ? page.subArea : null}</a>
                </li>
            </ol>

            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block" />
                <TopMenuAccount />
            </ul>
        </nav>
    );
};

export default TopMenu;
