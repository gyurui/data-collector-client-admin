import React from "react";
import { Colors } from "../../styles/Color";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";

interface Props {
    title: string;
    xLabelTitle: string;
    yLabelTitle: string;
    x: (number | undefined)[];
    y: (number | undefined)[];
    z: (number | undefined)[];
}

export class SensorChartWithThreeLine extends React.Component<Props> {


    public render(): React.ReactElement {
        return (
            <>
                <label style={{ fontSize: 24, marginTop: 20 }}>{this.props.title}</label>
                <VictoryChart>
                    <VictoryAxis label={this.props.xLabelTitle} />
                    <VictoryAxis dependentAxis label={this.props.yLabelTitle} />
                    <VictoryLine
                        data={this.props.x}
                        style={{
                            data: {
                                stroke: Colors.white,
                            },
                            parent: {
                                border: `1px solid ${Colors.midGray}`,
                            },
                        }}
                    />
                    <VictoryLine
                        data={this.props.y}
                        style={{
                            data: {
                                stroke: Colors.limeade,
                            },
                            parent: {
                                border: `1px solid ${Colors.limeade}`,
                            },
                        }}
                    />
                    <VictoryLine
                        data={this.props.z}
                        style={{
                            data: {
                                stroke: Colors.red,
                            },
                            parent: {
                                border: `1px solid ${Colors.red}`,
                            },
                        }}
                    />
                </VictoryChart>
            </>
        );
    }
}
