import {API_URL} from './index';
import {GOOGLE_API_KEY} from './keys';

export const ARTICLE_FETCH_API = (num) => {
    return `https://soapi.in:3001/articles/getarticlebackend/${num}`
};

export const FEED_FETCH_API = `${API_URL}/dashboard/feed/fetchfeed`;

export const ARTICLE_SEARCH_API = (searchString) => {
    return `https://soapi.in:3001/documents/searchforbackend/${searchString}`
};

export const FEED_DELETE_API = (feedId, city, articleId) => {
    return `${API_URL}/dashboard/feed/deletefeed/${feedId}/${city}/${articleId}`
}

export const FEED_UPDATE_API = (feedId, city) => {
    return `${API_URL}/dashboard/feed/updatefeed/${feedId}/${city}`
}

export const LISTING_FETCH_API = `https://soapi.in:3001/dashboard/listings/fetchListings`;

/**
 * GOOGLE GET API for fetching cover photo and gender.
 * @param id google user id (not e-mail)
 * @returns {string}
 * @constructor
 */
export const GOOGLE_SIGN_IN_API = (id) => {
    return `https://people.googleapis.com/v1/people/${id}?personFields=coverPhotos,genders&key=${GOOGLE_API_KEY}`
};

export const FACEBOOK_COVER_PROFILE_API = (token) => {
    return `https://graph.facebook.com/v2.11/me?fields=picture.width(500).height(500)%2C%20cover&access_token=${token}`;
}

/**
 * Post api for registering user to the backend server.
 * @param mode {string}
 * @returns {string}
 * @constructor
 */
export const SIGN_IN_API = (mode) => {
    return `${API_URL}/users/registerNew/${mode}`;
};

/**
 * POST Api for checking if jsontoken is valid and returning the userdata
 * @type {string}
 */
export const CHECKING_TOKEN_API = (accessToken) => {
   return `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`;
}