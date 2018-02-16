import {
    google_login_request,
    google_login_success,
    google_login_error,
    facebook_login_request,
    facebook_login_success,
    facebook_login_error,
    asyncCheckTokenError,
    asyncCheckTokenLoadingStarted,
    asyncCheckTokenSuccess,
    asyncLogoutUser
} from '../action/user.action';

import {SIGN_IN_API, CHECKING_TOKEN_API, FACEBOOK_COVER_PROFILE_API} from '../../constants/api';

import {getCallApi, postCallApi} from '../../utils/utils';

/**
 * Async Action for Google login
 * @param userData Object contains user data
 * @param id String googleId
 * @returns {function(*)}
 */
export const asyncGoogleSignin = (userData) => {
    console.log("aync called", userData);
    const emailArray = ["apoorv@so.city", "haimal@so.city", "sugandh360@gmail.com"];
    return (dispatch) => {
        dispatch(google_login_request());
        if (emailArray.includes(userData.user.email)) {
            dispatch(google_login_success(userData.user));
            return Promise.resolve();
        } else {
            dispatch(google_login_error());
            return Promise.reject();
        }
    }
}

/**
 * Action to perform facebook login
 * @param userData
 * @returns {function(*)}
 */
export const asyncFacebookLogin = (userData) => {
    //console.log("userData",userData);
    let userDataToBeSent = {};
    if (userData.additionalUserInfo) {
        const data = userData.additionalUserInfo.profile;
        userDataToBeSent = {
            gender: data.gender,
            displayName: data.name,
            id: data.id,
            email: data.email
        }
        console.log("datasent", userDataToBeSent);
    }
    return (dispatch) => {
        dispatch(facebook_login_request());
        console.log("api", getCallApi(FACEBOOK_COVER_PROFILE_API(userData.credential.accessToken)));
        return getCallApi(FACEBOOK_COVER_PROFILE_API(userData.credential.accessToken)).then((data) => {
            console.log("data", data);
            if (data.cover) {
                userDataToBeSent['coverPicture'] = data.cover.source;
            }
            if (data.picture) {
                userDataToBeSent['profilePicture'] = data.picture.data.url;
            }
            return new Promise((resolve, reject) => {
                postCallApi(SIGN_IN_API('facebook'), userDataToBeSent).then((data) => {
                    let dataToBeSentToReducers = {
                        success: true,
                        user: {
                            displayName: data.user.displayName,
                            email: data.user.email,
                            profilePicture: data.user.profilePicture,
                            coverPicture: data.user.coverPicture,
                            username: data.user.username,
                            interests: data.user.interests
                        },
                        accessToken: data.accessToken
                    };
                    dispatch(facebook_login_success(dataToBeSentToReducers));
                    return resolve(dataToBeSentToReducers);
                }).catch(error => {
                    dispatch(facebook_login_error(error));
                    return resolve(error);
                })
            });
        }).catch((error) => {
            dispatch(facebook_login_error(error));
            return Promise.reject(error);
        })
    }
    return (dispatch) => {
        console.log("there");
        dispatch(facebook_login_request());
        return postCallApi(SIGN_IN_API('facebook'), userDataToBeSent).then((data) => {
            let dataToBeSentToReducers = {
                success: true,
                user: {
                    displayName: data.user.displayName,
                    email: data.user.email,
                    profilePicture: data.user.profilePicture,
                    coverPicture: data.user.coverPicture,
                    username: data.user.username,
                    interests: data.user.interests
                },
                accessToken: data.accessToken
            };
            console.log(data);
            dispatch(facebook_login_success(dataToBeSentToReducers));
            return Promise.resolve(dataToBeSentToReducers);
        }).catch(error => {
            dispatch(facebook_login_error(error));
            return Promise.resolve(error);
        })
    }

}

/**
 * Action to perform the checking of json web token in cookie store
 * @param token
 * @returns {function(*)}
 */
export const asyncCheckUserToken = (token) => {
    const emailArray = ["apoorv@so.city", "haimal@so.city", "sugandh360@gmail.com"];
    return (dispatch) => {
        dispatch(asyncCheckTokenLoadingStarted());
        return getCallApi(CHECKING_TOKEN_API(token)).then((data) => {
            if (emailArray.includes(data.email)) {
                console.log("CheckUserToken api", data);
                dispatch(asyncCheckTokenSuccess(data));
                return Promise.resolve(data);
            }
        }).catch(error => {
            dispatch(asyncCheckTokenError(error));
            return Promise.resolve(error);
        })
    }
}

export const asyncLogout = () => {
    return (dispatch) => {
        dispatch(asyncLogoutUser());
    };
};
