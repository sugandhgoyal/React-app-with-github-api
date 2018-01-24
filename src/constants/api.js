import {
    API_URL
} from './index';

export const ARTICLE_FETCH_API = (num) => {
    return `${API_URL}/articles/getarticlebackend/${num}`
};

export const FEED_FETCH_API = `${API_URL}/feed/fetchfeedbackend`;

export const ARTICLE_SEARCH_API = (searchString) => {
    return `https://soapi.in:3001/documents/searchforbackend/${searchString}`
};
