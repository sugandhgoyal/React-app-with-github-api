import {
    GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_SUCCESS,FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_ERROR,LOGOUT_USER,
    CHECK_USER_TOKEN_ERROR,CHECK_USER_TOKEN_LOADER_STARTED,CHECK_USER_TOKEN_SUCCESS
} from '../../constants/index';

export const google_login_request = () => ({
    type: GOOGLE_LOGIN_REQUEST,
})
export const google_login_success = (user) => ({
    type: GOOGLE_LOGIN_SUCCESS,
    user
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
export const asyncLogoutUser = () => {
    return {
      type:LOGOUT_USER
    };
};
export const asyncCheckTokenLoadingStarted = () => {
    return {
        type: CHECK_USER_TOKEN_LOADER_STARTED
    }
}

export const asyncCheckTokenSuccess = (data) => {
    return {
        type: CHECK_USER_TOKEN_SUCCESS,
        data
    }
}

export const asyncCheckTokenError = (error) => {
    return {
        type: CHECK_USER_TOKEN_ERROR,
        error
    }
}
