import { Dispatch } from "react";
import { ReduxActions } from "../actions/ReduxActions";
import { addUsers } from "../actions/UserActions";
import { User } from "../models/UserInterface";
import { Measurement } from "../models/MeasurementInterface";
import { addMeasurements } from "../actions/MeasurementsActions";
import { Data } from "../models/Data";

export class ApiServices {
    private static address = "http://localhost:8080";

    public static async getUsers(dispatch: Dispatch<ReduxActions>, token: string) {
        await fetch(ApiServices.address + "/user", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                token: token,
            },
        })
            .then((res) => res.json())
            .then((res: User[]) => {
                dispatch(addUsers(res));
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
            });
    }

    public static async getData(measurementId: string): Promise<Data[]> {
        return await fetch(ApiServices.address + `/data/measurement?measurementId=${measurementId}`)
            .then((res) => res.json())
            .then((res) => {
                return res as Data[];
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
                //return "error";
                throw error;
            });
    }

    public static async login(email: string, password: string): Promise<string> {
        return await fetch(ApiServices.address + "/login", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    return res.token;
                } else {
                    throw new Error("no token");
                }
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
                throw error;
            });
    }

    public static async getMeasurements(dispatch: Dispatch<ReduxActions>) {
        await fetch(ApiServices.address + "/measurement")
            .then((res) => res.json())
            .then((res: Measurement[]) => {
                dispatch(addMeasurements(res));
                console.log(res);
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
            });
    }

    public static async addMeasurement(measurement: Measurement) {
        await fetch(ApiServices.address + "/measurement", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ measurement }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
            });
    }

    public static async startMeasurement(measurement: Measurement) {
        await fetch(ApiServices.address + "/startMeasurement", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify({ measurementId: measurement._id }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
            });
    }

    public static async clearMeasurement() {
        await fetch(ApiServices.address + "/stopMeasurement")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
            });
    }
}
