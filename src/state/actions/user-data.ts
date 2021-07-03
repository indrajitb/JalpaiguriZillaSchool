import { UserDataActionTypes } from '../action-types';

interface GetUserDataAction {
    type: UserDataActionTypes.GET_USER_DATA
}

interface GetUserDataSucceesAction {
    type: UserDataActionTypes.GET_USER_DATA_SUCCESS,
    payload: {
        userId: string;
        name: string;
        email: string;
        profileCreated: boolean
    };
}

interface GetUserDataErrorAction {
    type: UserDataActionTypes.GET_USER_DATA_ERROR,
    payload: {
        userId: string;
        name: string;
        email: string;
        error: string;
    };
}

interface SetUserDataAction {
    type: UserDataActionTypes.SET_USER_DATA,
}

interface SetUserDataSuccessAction {
    type: UserDataActionTypes.SET_USER_DATA_SUCCESS;
    payload: {
        userId: string;
        name: string;
        email: string;
        profileCreated: boolean
    }
}

interface SetUserDataErrorAction {
    type: UserDataActionTypes.SET_USER_DATA_ERROR;
    payload: {
        userId: string;
        name: string;
        email: string;
        error: string
    }
}

export type UserDataAction =
    GetUserDataAction
    | GetUserDataSucceesAction
    | GetUserDataErrorAction
    | SetUserDataAction
    | SetUserDataSuccessAction
    | SetUserDataErrorAction;
