import {
    API_URL
} from './index';

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