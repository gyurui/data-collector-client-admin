import React from "react";
import { useSelector } from "react-redux";
import { MeasurementState, StateType } from "../../models/RootInterface";
import { Measurement } from "../../models/MeasurementInterface";

export type measurementListProps = {
    onSelect?: (measurement: Measurement) => void;
    children?: React.ReactNode;
};

function MeasurementList(props: measurementListProps): JSX.Element {
    const measurements: MeasurementState = useSelector((state: StateType) => state.measurements);

    const measurementElements: (JSX.Element | null)[] = measurements.measurements.map((measurement) => {
        if (!measurement) {
            return null;
        }
        return (
            <tr
                className={`table-row ${measurements.selectedMeasurement && measurements.selectedMeasurement._id === measurement._id ? "selected" : ""}`}
                onClick={() => {
                    if (props.onSelect) props.onSelect(measurement);
                }}
                key={`measurement_${measurement._id}`}
            >
                <th scope="row">{measurement._id}</th>
                <td>{measurement.name}</td>
                <td>{measurement.description}</td>
                <td>{measurement.ownerUser}</td>
            </tr>
        );
    });

    return (
        <div className="table-responsive portlet">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Owner User</th>
                    </tr>
                </thead>
                <tbody>{measurementElements}</tbody>
            </table>
        </div>
    );
}

export default MeasurementList;
