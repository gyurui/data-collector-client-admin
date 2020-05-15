export interface SensorData {
    leftDesiredSpeed?: number;
    leftMeasuredSpeed?: number;
    leftPidSignal?: number;
    rightDesiredSpeed?: number;
    rightMeasuredSpeed?: number;
    rightPidSignal?: number;
    carRealSpeed?: number;
    rotationRatio?: number;
    gyroscopeX?: number;
    gyroscopeY?: number;
    gyroscopeZ?: number;
    accelerometerX?: number;
    accelerometerY?: number;
    accelerometerZ?: number;
    magnetometerX?: number;
    magnetometerY?: number;
    magnetometerZ?: number;
    pressure?: number;
    batteryLevel?: number;
    gpsLatitude?: number;
    gpsLongitude?: number;
}

export interface Data extends Document {
    measuredValues: SensorData;
    sendDate: Date;
    createdDate?: Date;
    measurementId: string;
}
