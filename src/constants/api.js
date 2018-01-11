import {
    API_URL
} from './index';

export const ARTICLE_FETCH_API = (num) => {
    return `${API_URL}/articles/getarticlebackend/${num}`
};


export const FEED_FETCH_API = (num, city) => {
    return `${API_URL}/feed/fetchfeedbackend/${num}?cities=${city}`
};
