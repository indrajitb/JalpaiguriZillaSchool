import { UserProfileActionTypes } from '../action-types';
import { UserProfileAction } from '../actions';

interface UserProfileState {
    userId: string;
    profileId: string;
    error: string | null;
    loading: boolean;
    role: string;
    roleInteger: null;
    classRoomYear?: string;
    schoolLeavingYear?: string;
    classRoom?: string;
    year?: string;
}

const initialState = {
    profileId: null,
    userId: null,
    role: null,
    roleInteger: null,
    classRoomYear: null,
    schoolLeavingYear: null,
    year: null,
    classRoom: null,
    loading: false,
    error: null
}

export const userProfileReducer = (state: UserProfileState = initialState,
    action: UserProfileAction) => {

    switch (action.type) {
        case UserProfileActionTypes.GET_USER_PROFILE:
            return {
                ...state,
                loading: true
            };
        case UserProfileActionTypes.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profileId: action.payload.profileId,
                userId: action.payload.userId,
                role: action.payload.role,
                roleInteger: action.payload.roleInteger,
                classRoomYear: action.payload.classRoomYear,
                schoolLeavingYear: action.payload.schoolLeavingYear,
                year: action.payload.year,
                classRoom: action.payload.classRoom,
                loading: false,
            };
        case UserProfileActionTypes.GET_USER_PROFILE_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false
            };
        case UserProfileActionTypes.SET_USER_PROFILE:
            return {
                ...state,
                loading: true
            };
        case UserProfileActionTypes.SET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profileId: action.payload.profileId,
                userId: action.payload.userId,
                role: action.payload.role,
                roleInteger: action.payload.roleInteger,
                classRoomYear: action.payload.classRoomYear,
                schoolLeavingYear: action.payload.schoolLeavingYear,
                year: action.payload.year,
                classRoom: action.payload.classRoom,
                loading: false,
                error: null
            }
        case UserProfileActionTypes.SET_USER_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}