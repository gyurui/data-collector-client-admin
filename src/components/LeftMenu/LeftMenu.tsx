import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu: React.FC = () => {
    const [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return leftMenuVisibility ? "" : "collapsed";
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-bolt" />
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`} id="collapseMenu">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon icon-green rotate-n-15">
                        <i className="fab fa-react" />
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        DMS <sup>Admin</sup>
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="Home">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Measurements</div>

                <li className="nav-item">
                    <Link className="nav-link" to={"/measurements"}>
                        <i className="fas fa-fw fa-warehouse" />
                        <span>Measurements</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={"/reports"}>
                        <i className="fas fa-fw fa-user" />
                        <span>Reports</span>
                    </Link>
                </li>


                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Admin</div>

                <li className="nav-item">
                    <Link className="nav-link" to={"/users"}>
                        <i className="fas fa-fw fa-user" />
                        <span>Users</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </Fragment>
    );
};

export default LeftMenu;
