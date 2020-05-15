export enum AccountActionTypeName {
    logIn = "LOG_IN",
    logOut = "LOG_OUT",
}

export function login(email: string, token: string): LogInActionType {
    return { type: AccountActionTypeName.logIn, email: email, token: token };
}

export function logout(): LogOutActionType {
    return { type: AccountActionTypeName.logOut };
}

interface LogInActionType {
    type: AccountActionTypeName.logIn;
    email: string;
    token: string;
}
interface LogOutActionType {
    type: AccountActionTypeName.logOut;
}

export type AccountActions = LogInActionType | LogOutActionType;
