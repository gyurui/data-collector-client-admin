import React, { Fragment, useState, useEffect } from "react";
import "../Measurements/Measurements.css";
import { ApiServices } from "../../services/ApiServices";
import { SensorChartWithThreeLine } from "../../common/components/ChartWithThreeLine";
import { Data } from "../../models/Data";

const Template: React.FC = () => {
    const [fetchedData, setFetchedData] = useState([] as Data[]);

    const authResult = new URLSearchParams(window.location.search);
    const code = authResult.get("measurementId");

    const downloadData = async () => {
        const data = await ApiServices.getData(code ?? "5eca470fca74ed00241140aa");
        setFetchedData(data);
    };

    useEffect(() => {
        downloadData();
    }, []);

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Measurements</h1>

            <div className="row">
                <div className="card-body">
                    {fetchedData.length !== 0 && (
                        <div className="data">
                            <SensorChartWithThreeLine
                                title={"Left speed"}
                                xLabelTitle={"Sampling time [10 milli sec]"}
                                yLabelTitle={"Speed [mm/s]"}
                                x={fetchedData.map((value) => {
                                    return value.measuredValues.leftDesiredSpeed ?? 0;
                                })}
                                xLineTitle={"Left Desired Speed"}
                                y={fetchedData.map((value) => {
                                    return value.measuredValues.leftMeasuredSpeed ?? 0;
                                })}
                                yLineTitle={"Left Measured Speed"}
                                z={[]}
                            />
                            <SensorChartWithThreeLine
                                title={"Right speed"}
                                xLabelTitle={"Sampling time [10 milli sec]"}
                                yLabelTitle={"Speed [mm/s]"}
                                x={fetchedData.map((value) => {
                                    return value.measuredValues.rightDesiredSpeed ?? 0;
                                })}
                                xLineTitle={"Right Desired Speed"}
                                y={fetchedData.map((value) => {
                                    return value.measuredValues.rightMeasuredSpeed ?? 0;
                                })}
                                yLineTitle={"Right Measured Speed"}
                                z={[]}
                            />
                            <SensorChartWithThreeLine
                                title={"PID signal"}
                                xLabelTitle={"Sampling time [10 milli sec]"}
                                yLabelTitle={"Signal [pwm]"}
                                x={fetchedData.map((value) => {
                                    return value.measuredValues.rightPidSignal ?? 0;
                                })}
                                xLineTitle={"Right Pid Signal"}
                                y={fetchedData.map((value) => {
                                    return value.measuredValues.leftPidSignal ?? 0;
                                })}
                                yLineTitle={"Left Pid Signal"}
                                z={[]}
                            />
                            {/*<pre>{JSON.stringify(fetchedData, null, 2)}</pre>*/}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Template;
