import {
    asyncGoogleSigningError,
    asyncGoogleSigningLoadingStarted,
    asyncGoogleSigningSuccess,
    asyncFacebookLoggingLoaderStarted,
    asyncFacebookLoggingSuccess,
    asyncFacebookLoggingError,
    asyncCheckTokenLoadingStarted,
    asyncCheckTokenError,
    asyncCheckTokenSuccess,
    asyncFeedActionSuccess,
    asyncFeedActionError,
    asyncLoadingStarted,
    asyncFollowUnfollowLoaderStarted,
    asyncFollowUnfollowSuccess,
    asyncFollowUnfollowError
} from '../action/user.action';


import {
    GOOGLE_SIGN_IN_API,
    SIGN_IN_API,
    CHECKING_TOKEN_API,
    FEED_ACTION_API,
    FOLLOW_UNFOLLOW_API,
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
        dispatch(asyncGoogleSigningLoadingStarted());
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
                                dispatch(asyncGoogleSigningSuccess(dataToBeSentToReducers));
                                return resolve(dataToBeSentToReducers);
                            }
                            if (!savedUserData.success) {
                                dispatch(asyncGoogleSigningError(savedUserData));
                                return reject(savedUserData);
                            }

                        })
                        .catch(loginError => {
                            dispatch(asyncGoogleSigningError(loginError));
                            return reject(loginError);
                        });
                });
            })
            .catch((error) => {
                dispatch(asyncGoogleSigningError(error));
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
    let userDataToBeSent = {};
    if (userData.additionalUserInfo) {
        const data = userData.additionalUserInfo.profile;
        userDataToBeSent = {
            gender: data.gender,
            displayName: data.name,
            id: data.id,
            email: data.email
        }
    }
    return (dispatch) => {
        dispatch(asyncFacebookLoggingLoaderStarted());
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
                            dispatch(asyncFacebookLoggingSuccess(dataToBeSentToReducers));
                            return resolve(dataToBeSentToReducers);
                        })
                        .catch(error => {
                            dispatch(asyncFacebookLoggingError(error));
                            return resolve(error);
                        })
                });
            })
            .catch((error) => {
                dispatch(asyncGoogleSigningError(error));
                return Promise.reject(error);
            })
    }
    // return (dispatch) => {
    //     dispatch(asyncFacebookLoggingLoaderStarted());
    //     return postCallApi(SIGN_IN_API('facebook'), userDataToBeSent )
    //         .then((data) => {
    //             let dataToBeSentToReducers = {
    //                 success:true,
    //                 user:{
    //                     displayName:data.user.displayName,
    //                     email: data.user.email,
    //                     profilePicture: data.user.profilePicture,
    //                     coverPicture: data.user.coverPicture,
    //                     username: data.user.username,
    //                     interests: data.user.interests,
    //                 },
    //                 accessToken:data.accessToken
    //             };
    //             console.log(data);
    //             dispatch(asyncFacebookLoggingSuccess(dataToBeSentToReducers));
    //             return Promise.resolve(dataToBeSentToReducers);
    //         })
    //         .catch(error => {
    //             dispatch(asyncFacebookLoggingError(error));
    //             return Promise.resolve(error);
    //         })
    // }

//}


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