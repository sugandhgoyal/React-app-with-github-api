import {
    GOOGLE_LOGIN_ERROR,
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_REQUEST,
    FACEBOOK_LOGIN_ERROR,
    LOGOUT_USER,
    CHECK_USER_TOKEN_ERROR,
    CHECK_USER_TOKEN_LOADER_STARTED,
    CHECK_USER_TOKEN_SUCCESS
} from '../../constants/index';
import { stat } from 'fs';

const initialState = {
    googleLoading: false,
    facebookLoading: false,
    tokenLoading: false,
    userData: [],
    refreshUserData: '',
    email: '',
    isLoggedIn: false,
    loading: false,
    followLoading: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_LOGIN_REQUEST:
            return {
                ...state,
                googleLoading: true,
                isLoggedIn: false
            }
        case GOOGLE_LOGIN_SUCCESS:
            console.log("success", action.user);
            return {
                ...state,
                googleLoading: false,
                userData: action.user,
                email: action.user.email,
                isLoggedIn: true
            }

        case GOOGLE_LOGIN_ERROR:
            return {
                ...state,
                googleLoading: false,
                error: action.error,
                isLoggedIn: false
            }

        case FACEBOOK_LOGIN_REQUEST:
            return {
                ...state,
                facebookLoading: true
            }

        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                facebookLoading: false,
                userData: action.data,
                isLoggedIn: true
            }

        case FACEBOOK_LOGIN_ERROR:
            return {
                ...state,
                facebookLoading: false,
                error: action.error,
                isLoggedIn: false
            }
        case LOGOUT_USER:
            return {
                userData: {}
            }
        case CHECK_USER_TOKEN_LOADER_STARTED:
            return {
                ...state,
                tokenLoading: true,
                isLoggedIn: true
            }
        case
            CHECK_USER_TOKEN_SUCCESS:
            console.log("token", state);
            return {
                ...state,
                tokenLoading: false,
                userData: state.userData,
                refreshUserData: action.data,
                isLoggedIn: true
            }
        case
            CHECK_USER_TOKEN_ERROR:
            return {
                ...state,
                tokenLoading: false,
                error: action.error,
                isLoggedIn: false
            }
        default:
            return {
                ...state
            }

    }

}