import {
    GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_ERROR
} from '../../constants/index';

const google_login_request = () => ({
    type: GOOGLE_LOGIN_REQUEST,
})
const google_login_success = () => ({
    type: GOOGLE_LOGIN_SUCCESS,
})
const google_login_error = () => ({
    type: GOOGLE_LOGIN_ERROR,
})
const facebook_login_request = () => ({
    type: FACEBOOK_LOGIN_REQUEST,
})
const facebook_login_success = () => ({
    type: FACEBOOK_LOGIN_SUCCESS,
})
const facebook_login_error = () => ({
    type: FACEBOOK_LOGIN_ERROR,
})