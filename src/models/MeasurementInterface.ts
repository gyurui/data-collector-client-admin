export interface Measurement {
    _id: string;
    name: string;
    ownerUser: string;
    description: string;
}

export enum MeasurementModificationStatus {
    None = 0,
    Create = 1,
    Edit = 2,
}
