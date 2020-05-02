import React, { Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxActions } from "../../actions/ReduxActions";
import { updateCurrentPath } from "../../actions/RootActions";
import { User } from "../../models/UserInterface";
import { StateType } from "../../models/RootInterface";
import { addAdmin, removeAdmin } from "../../actions/UserActions";
import TopCard from "../../common/components/TopCard";

const Users: React.FC = () => {
    const dispatch: Dispatch<ReduxActions> = useDispatch();
    dispatch(updateCurrentPath("user", "list"));

    const users: User[] = useSelector((state: StateType) => state.users.users);
    const admins: User[] = useSelector((state: StateType) => state.users.admins);

    function setUserAdmin(user: User): void {
        dispatch(addAdmin(user));
    }

    function setUserNotAdmin(admin: User): void {
        dispatch(removeAdmin(admin));
    }

    const userElements: JSX.Element[] = users.map((user) => {
        return (
            <tr className={"table-row"} key={`user_${user._id}`}>
                <th scope="row">{user._id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-success" onClick={() => setUserAdmin(user)}>
                        Set admin
                    </button>{" "}
                </td>
            </tr>
        );
    });

    const adminElements: JSX.Element[] = admins.map((admin) => {
        return (
            <tr className={"table-row"} key={`user_${admin._id}`}>
                <th scope="row">{admin._id}</th>
                <td>{admin.firstName}</td>
                <td>{admin.lastName}</td>
                <td>{admin.email}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => setUserNotAdmin(admin)}>
                        Revert admin
                    </button>{" "}
                </td>
            </tr>
        );
    });

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Users</h1>
            <p className="mb-4">Users here</p>

            <div className="row">
                <TopCard title="ADMINS" text={admins.length.toString()} icon="user-tie" class="primary" />
                <TopCard title="USER" text={users.length.toString()} icon="user" class="danger" />
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-green">Admin List</h6>
                            <div className="header-buttons" />
                        </div>
                        <div className="card-body">
                            <div className="table-responsive portlet">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First name</th>
                                            <th scope="col">Last name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Admin</th>
                                        </tr>
                                    </thead>
                                    <tbody>{adminElements}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-green">User List</h6>
                            <div className="header-buttons" />
                        </div>
                        <div className="card-body">
                            <div className="table-responsive portlet">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First name</th>
                                            <th scope="col">Last name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Admin</th>
                                        </tr>
                                    </thead>
                                    <tbody>{userElements}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Users;
