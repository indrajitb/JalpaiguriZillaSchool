import { UserProfileActionTypes } from '../action-types';

interface GetUserProfileAction {
    type: UserProfileActionTypes.GET_USER_PROFILE
}

interface GetUserProfileSuccessAction {
    type: UserProfileActionTypes.GET_USER_PROFILE_SUCCESS,
    payload: {
        role: string;
        roleInteger: number,
        classRoomYear: string;
        schoolLeavingYear: string;
        year: string;
        classRoom: string;
        userId: string;
        profileId: string;
        loading: boolean;
    };
}

interface GetUserProfileErrorAction {
    type: UserProfileActionTypes.GET_USER_PROFILE_ERROR,
    payload: {
        error: string;
    };
}

interface SetUserProfileAction {
    type: UserProfileActionTypes.SET_USER_PROFILE
}

interface SetUserProfileSuccessAction {
    type: UserProfileActionTypes.SET_USER_PROFILE_SUCCESS,
    payload: {
        role: string;
        roleInteger: number,
        classRoomYear: string;
        schoolLeavingYear: string;
        year: string;
        classRoom: string;
        userId: string;
        profileId: string
    };
}

interface SetUserProfileErrorAction {
    type: UserProfileActionTypes.SET_USER_PROFILE_ERROR,
    payload: {
        error: string;
    };
}

export type UserProfileAction =
    GetUserProfileAction
    | GetUserProfileSuccessAction
    | GetUserProfileErrorAction
    | SetUserProfileAction
    | SetUserProfileSuccessAction
    | SetUserProfileErrorAction;