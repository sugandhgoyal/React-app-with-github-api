import {
    google_login_request,
    google_login_success,
    google_login_error,
    facebook_login_request,
    facebook_login_success,
    facebook_login_error
} from '../action/user.action';


import {
    GOOGLE_SIGN_IN_API,
    SIGN_IN_API,
    CHECKING_TOKEN_API,
    FACEBOOK_COVER_PROFILE_API
} from '../../constants/api';


import {
    getCallApi,
    postCallApi
} from '../../utils/utils';



/**
 * Async Action for Google login
 * @author Rishabh Rawat
 * @param userData Object contains user data
 * @param id String googleId
 * @returns {function(*)}
 */
export const asyncGoogleSignin = (userData, id) => {
    let userDataToBeSent = {};
    if (userData.additionalUserInfo) {
        const data = userData.additionalUserInfo.profile;
        userDataToBeSent = {
            gender: data.gender,
            displayName: data.name,
            id: data.id,
            email: data.email,
            profilePicture: data.picture
        }
    }
    return (dispatch) => {
        dispatch(google_login_request());
        return getCallApi(GOOGLE_SIGN_IN_API(userDataToBeSent.id))
            .then((data) => {
                if (data.coverPhotos) {
                    userDataToBeSent['coverPicture'] = data.coverPhotos[0].url;
                }
                if (data.gender) {
                    userDataToBeSent['gender'] = data.genders[0].value;
                }
                return new Promise((resolve, reject) => {
                    postCallApi(SIGN_IN_API('google'), userDataToBeSent)
                        .then((savedUserData) => {
                            if (savedUserData.status === 'success') {
                                let dataToBeSentToReducers = {
                                    success: true,
                                    user: {
                                        displayName: savedUserData.user.displayName,
                                        email: savedUserData.user.email,
                                        profilePicture: savedUserData.user.profilePicture,
                                        coverPicture: savedUserData.user.coverPicture,
                                        username: savedUserData.user.username,
                                        interests: savedUserData.user.interests,
                                    },
                                    accessToken: savedUserData.accessToken
                                };
                                dispatch(google_login_success(dataToBeSentToReducers));
                                return resolve(dataToBeSentToReducers);
                            }
                            if (!savedUserData.success) {
                                dispatch(google_login_error(savedUserData));
                                return reject(savedUserData);
                            }

                        })
                        .catch(loginError => {
                            dispatch(google_login_error(loginError));
                            return reject(loginError);
                        });
                });
            })
            .catch((error) => {
                dispatch(google_login_error(error));
                return Promise.reject(error);
            })
    }
}


/**
 * Action to perform facebook login
 * @param userData
 * @returns {function(*)}
 */
export const asyncFacebookLogin = (userData) => {
    console.log("userData",userData);
    let userDataToBeSent = {};
    if (userData.additionalUserInfo) {
        const data = userData.additionalUserInfo.profile;
        userDataToBeSent = {
            gender: data.gender,
            displayName: data.name,
            id: data.id,
            email: data.email
        }
        console.log("datasent",userDataToBeSent);
    }
    return (dispatch) => {
        console.log("here");
        dispatch(facebook_login_request());
        console.log("api",getCallApi(FACEBOOK_COVER_PROFILE_API(userData.credential.accessToken)));
        return getCallApi(FACEBOOK_COVER_PROFILE_API(userData.credential.accessToken))
            .then((data) => {
                console.log("data", data);
                if (data.cover) {
                    userDataToBeSent['coverPicture'] = data.cover.source;
                }
                if (data.picture) {
                    userDataToBeSent['profilePicture'] = data.picture.data.url;
                }
                return new Promise((resolve, reject) => {
                    postCallApi(SIGN_IN_API('facebook'), userDataToBeSent)
                        .then((data) => {
                            let dataToBeSentToReducers = {
                                success: true,
                                user: {
                                    displayName: data.user.displayName,
                                    email: data.user.email,
                                    profilePicture: data.user.profilePicture,
                                    coverPicture: data.user.coverPicture,
                                    username: data.user.username,
                                    interests: data.user.interests,
                                },
                                accessToken: data.accessToken
                            };
                            dispatch(facebook_login_success(dataToBeSentToReducers));
                            return resolve(dataToBeSentToReducers);
                        })
                        .catch(error => {
                            dispatch(facebook_login_error(error));
                            return resolve(error);
                        })
                });
            })
            .catch((error) => {
                dispatch(facebook_login_error(error));
                return Promise.reject(error);
            })
    }
    return (dispatch) => {
        console.log("there");
        dispatch(facebook_login_request());
        return postCallApi(SIGN_IN_API('facebook'), userDataToBeSent )
            .then((data) => {
                let dataToBeSentToReducers = {
                    success:true,
                    user:{
                        displayName:data.user.displayName,
                        email: data.user.email,
                        profilePicture: data.user.profilePicture,
                        coverPicture: data.user.coverPicture,
                        username: data.user.username,
                        interests: data.user.interests,
                    },
                    accessToken:data.accessToken
                };
                console.log(data);
                dispatch(facebook_login_success(dataToBeSentToReducers));
                return Promise.resolve(dataToBeSentToReducers);
            })
            .catch(error => {
                dispatch(facebook_login_error(error));
                return Promise.resolve(error);
            })
    }

}


// /**
//  * Action to perform the checking of json web token in cookie store
//  * @param token
//  * @returns {function(*)}
//  */
// export const asyncCheckUserToken = (token) => {
//     return (dispatch) => {
//         dispatch(asyncCheckTokenLoadingStarted());
//         return postCallApi(CHECKING_TOKEN_API, {
//             token: token
//         })
//             .then(data => {
//                 if (data.success) {
//                     const userData = {
//                         user: {
//                             displayName: data.user.displayName,
//                             email: data.user.email,
//                             profilePicture: data.user.profilePicture,
//                             coverPicture: data.user.coverPicture,
//                             username: data.user.username,
//                             interests: data.user.interests,
//                         },
//                         accessToken: data.refreshedToken
//                     }
//                     dispatch(asyncCheckTokenSuccess(userData));
//                     return Promise.resolve(userData);
//                 }
//             })
//             .catch(error => {
//                 dispatch(asyncCheckTokenError(error));
//                 return Promise.resolve(error);
//             })
//     }
// }


// /**
//  * Action to perform feed actions
//  * Feed action - Like, Bookmark, Share
//  * @author Rishabh Rawat
//  * @param data
//  * @returns {function(*)}
//  */
// export const asyncFeedAction = (data) => {
//     return (dispatch) => {
//         dispatch(asyncLoadingStarted());
//         return getCallApi(FEED_ACTION_API(data.token, data.action, data.uniqueId, data.time, data.status))
//             .then(data => {
//                 console.log("data", data);
//                 dispatch(asyncFeedActionSuccess(data));
//                 return Promise.resolve(data);
//             })
//             .catch(error => {
//                 dispatch(asyncFeedActionError(error));
//                 return Promise.reject(error);
//             })
//     }
// }


// // /**
//  * Action to follow and unfollow a publisher
//  * @param status
//  * @param followId
//  * @param username
//  * @param token
//  * @returns {function(*)}
//  */
// export const asyncFollowUnfollowAction = (status, followId, username, token) => {
//     return (dispatch) => {
//         dispatch(asyncFollowUnfollowLoaderStarted());
//         return getCallApi(FOLLOW_UNFOLLOW_API(followId, username, status, token))
//             .then(data => {
//                 dispatch(asyncFollowUnfollowSuccess(data));
//                 return Promise.resolve(data);
//             })
//             .catch(error => {
//                 dispatch(asyncFollowUnfollowError(error));
//                 return Promise.reject(error);
//             })
//     }
// }