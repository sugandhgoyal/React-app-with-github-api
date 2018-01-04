/**
 *  All constants should go here
 */
// export const LOADER_ACTIVATED = 'LOADER_ACTIVATED';
// export const FETCH_FEED_HOMEPAGE_SUCCESS = 'FETCH_FEED_HOMEPAGE';
// export const FETCH_FEED_HOMEPAGE_ERROR = 'FETCH_FEED_HOMEPAGE_ERROR';
export const LOAD_ARTICLE_DATA = 'LOAD_ARTICLE_DATA';
export const LOAD_ARTICLE_DATA_SUCCESS = 'LOAD_ARTICLE_DATA_SUCCESS';
export const LOAD_ARTICLE_DATA_ERROR = 'LOAD_ARTICLE_DATA_ERROR';

/**
 * API URL DYNAMIC
 * options
 * prod = 'for production apis connecting with main backend server'
 * dev = 'for Local apis connecting with local server'
 * staging = 'for staging apis connecting with staging server'
 */
export const apiUrl = 'prod';

export let API_URL;

if (apiUrl === 'prod') {
    API_URL = 'https://soapi.in:3001';
}
if (apiUrl === "dev") {
    API_URL = 'http://localhost:3002';
}

