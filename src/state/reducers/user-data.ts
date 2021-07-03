import { UserDataActionTypes } from '../action-types';
import { UserDataAction } from '../actions';

interface UserDataState {
    loggedIn: boolean;
    userId: string;
    name: string;
    email: string;
    error: string | null;
    loading: boolean;
    profileCreated: boolean
}

const initialState = {
    loggedIn: false,
    userId: null,
    name: null,
    email: null,
    error: null,
    loading: false,
    profileCreated: false
}

export const userDataReducer = (state: UserDataState = initialState,
    action: UserDataAction) => {

    switch (action.type) {
        case UserDataActionTypes.GET_USER_DATA:
            return {
                ...state,
                loading: true
            };
        case UserDataActionTypes.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                name: action.payload.name,
                email: action.payload.email,
                userId: action.payload.userId,
                loading: false,
                profileCreated: action.payload.profileCreated
            }
        case UserDataActionTypes.GET_USER_DATA_ERROR:
            return {
                ...state,
                loggedIn: false,
                name: action.payload.name,
                email: action.payload.email,
                userId: action.payload.userId,
                loading: false,
                error: action.payload.error
            }
        case UserDataActionTypes.SET_USER_DATA:
            return {
                ...state,
                loading: true
            }
        case UserDataActionTypes.SET_USER_DATA_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                name: action.payload.name,
                email: action.payload.email,
                userId: action.payload.userId,
                loading: false,
                profileCreated: action.payload.profileCreated
            };
        case UserDataActionTypes.SET_USER_DATA_ERROR:
            return {
                ...state,
                loggedIn: false,
                name: null,
                email: null,
                userId: null,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }

}