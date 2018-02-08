/**
 *  All constants should go here
 */
export const LOAD_ARTICLE_DATA = 'LOAD_ARTICLE_DATA';
export const LOAD_ARTICLE_DATA_SUCCESS = 'LOAD_ARTICLE_DATA_SUCCESS';
export const LOAD_ARTICLE_DATA_ERROR = 'LOAD_ARTICLE_DATA_ERROR';
export const LAZY_LOADER_ACTIVATED = 'LAZY_LOADER_ACTIVATED';
export const LAZY_LOADER_ERROR = 'LAZY_LOADER_ERROR';
export const LAZY_LOADER_SUCCESS = 'LAZY_LOADER_SUCCESS';
export const LOAD_FEED_DATA = 'LOAD_FEED_DATA';
export const LOAD_FEED_DATA_SUCCESS = 'LOAD_FEED_DATA_SUCCESS';
export const LOAD_FEED_DATA_ERROR = 'LOAD_FEED_DATA_ERROR';
export const GOOGLE_LOGIN_ERROR = 'GOOGLE_LOGIN_ERROR';
export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_REQUEST = 'FACEBOOK_LOGIN_REQUEST';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';
export const ARTICLE_SEARCH_REQUESTED = 'ARTICLE_SEARCH_REQUESTED';
export const ARTICLE_SEARCH_SUCCESS = 'ARTICLE_SEARCH_SUCCESS';
export const ARTICLE_SEARCH_ERROR = 'ARTICLE_SEARCH_ERROR';
export const HEADER_DATA = 'HEADER_DATA';
export const HEADER_DATA_SUCCESS = 'HEADER_DATA_SUCCESS';
export const HEADER_DATA_ERROR = 'HEADER_DATA_ERROR';
export const FEED_DELETE_REQUESTED = 'FEED_DELETE_REQUESTED';
export const FEED_DELETE_SUCCESS = 'FEED_DELETE_SUCCESS';
export const FEED_DELETE_ERROR = 'FEED_DELETE_ERROR';
export const FEED_UPDATE_REQUESTED = 'FEED_UPDATE_REQUESTED';
export const FEED_UPDATE_SUCCESS = 'FEED_UPDATE_SUCCESS';
export const FEED_UPDATE_ERROR = 'FEED_UPDATE_ERROR';
export const FEED_FILTER_REQUESTED = 'FEED_FILTER_REQUESTED';
export const FEED_FILTER_SUCCESS = 'FEED_FILTER_SUCCESS';
export const FEED_FILTER_ERROR = 'FEED_FILTER_ERROR';
export const LOAD_LISTING_DATA = 'LOAD_LISTING_DATA';
export const LOAD_LISTING_DATA_SUCCESS = 'LOAD_LISTING_DATA_SUCCESS';
export const LOAD_LISTING_DATA_ERROR = 'LOAD_LISTING_DATA_ERROR';

/**
 * API URL DYNAMIC
 * options
 * prod = 'for production apis connecting with main backend server'
 * dev = 'for Local apis connecting with local server'
 * staging = 'for staging apis connecting with staging server'
 */
export const apiUrl = 'stag';

export let API_URL;

if (apiUrl === 'prod') {
    API_URL = 'https://soapi.in:3001';
}
if (apiUrl === "dev") {
    API_URL = 'http://localhost:3002';
}
if (apiUrl === 'stag') {
    API_URL = 'http://139.59.87.56:3002';
}
