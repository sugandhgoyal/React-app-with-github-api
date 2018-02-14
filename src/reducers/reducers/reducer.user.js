import {
    GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST, GOOGLE_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_ERROR
} from '../../constants/index';

const initialState = {
    googleLoading: false,
    facebookLoading:false,
    tokenLoading:false,
    userData:{},
    isLoggedIn:false,
    loading:false,
    followLoading:false
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOOGLE_LOGIN_REQUEST:
            return {
                ...state,
                googleLoading:true
            }
        case GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                googleLoading:false,
                userData: action.data,
                isLoggedIn:true
            }
        case GOOGLE_LOGIN_ERROR:
            return {
                ...state,
                googleLoading:false,
                error: action.error,
                isLoggedIn:false
            }


        case FACEBOOK_LOGIN_REQUEST:
            return {
                ...state,
                facebookLoading:true
            }


        case FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                facebookLoading:false,
                userData: action.data,
                isLoggedIn:true
            }


        case FACEBOOK_LOGIN_ERROR:
            return {
                ...state,
                facebookLoading:false,
                error: action.error,
                isLoggedIn:false
            }

        // case CHECK_USER_TOKEN_LOADER_STARTED:
        //     return {
        //         ...state,
        //         tokenLoading:true,
        //         isLoggedIn:true
        //     }


        // case CHECK_USER_TOKEN_SUCCESS:
        //     return {
        //         ...state,
        //         tokenLoading:false,
        //         userData: action.data,
        //         isLoggedIn: true
        //     }

        // case CHECK_USER_TOKEN_ERROR:
        //     return {
        //         ...state,
        //         tokenLoading:false,
        //         error: action.error,
        //         isLoggedIn:false
        //     }

        // case USER_LOADER_ACTIVATED:
        //     return {
        //         ...state,
        //         loading:true
        //     }

        // case FEED_ACTION_SUCCESS:
        //     return {
        //         ...state,
        //         loading:false
        //     }

        // case FEED_ACTION_ERROR:
        //     return {
        //         ...state,
        //         loading:false
        //     }
        default:
            return {
                ...state
            }

    }




}