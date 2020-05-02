import { Dispatch } from "react";
import { ReduxActions } from "../actions/ReduxActions";
import { addUsers } from "../actions/UserActions";
import { User } from "../models/UserInterface";
import { Measurement } from "../models/MeasurementInterface";
import { addMeasurements } from "../actions/MeasurementsActions";

export class ApiServices {
    public static async getUsers(dispatch: Dispatch<ReduxActions>) {
        await fetch("http://localhost:8080/user")
            .then((res) => res.json())
            .then((res: User[]) => {
                dispatch(addUsers(res));
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
            });
    }

    public static async getData(): Promise<string> {
        return await fetch("http://localhost:8080/data")
            .then((res) => res.json())
            .then((res) => {
                return res;
            })
            .catch((error) => {
                //dispatch(fetchUsers(error));
                return "error";
            });
    }

    public static async getMeasurements(dispatch: Dispatch<ReduxActions>) {
        await fetch("http://localhost:8080/measurement")
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
        await fetch("http://localhost:8080/measurement", {
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
        await fetch("http://localhost:8080/startMeasurement", {
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
        await fetch("http://localhost:8080/stopMeasurement")
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
