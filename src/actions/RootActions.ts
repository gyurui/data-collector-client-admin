export enum RootActionsTypesName {
    updateCurrentPath = "UPDATE_CURRENT_PATH",
}

export function updateCurrentPath(area: string, subArea: string): UpdateCurrentPathActionType {
    return { type: RootActionsTypesName.updateCurrentPath, area: area, subArea: subArea };
}

interface UpdateCurrentPathActionType {
    type: RootActionsTypesName.updateCurrentPath;
    area: string;
    subArea: string;
}

export type RootActions = UpdateCurrentPathActionType;
