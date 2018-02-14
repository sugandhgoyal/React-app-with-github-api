import {
    GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_ERROR
} from '../../constants/index';

export const google_login_request = () => ({
    type: GOOGLE_LOGIN_REQUEST,
})
export const google_login_success = (data) => ({
    type: GOOGLE_LOGIN_SUCCESS,
    data
})
export const google_login_error = () => ({
    type: GOOGLE_LOGIN_ERROR,
})
export const facebook_login_request = () => ({
    type: FACEBOOK_LOGIN_REQUEST,
})
export const facebook_login_success = (data) => ({
    type: FACEBOOK_LOGIN_SUCCESS,
    data
})
export const facebook_login_error = () => ({
    type: FACEBOOK_LOGIN_ERROR,
})