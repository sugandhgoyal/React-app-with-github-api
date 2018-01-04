import {
    API_URL
} from './index';

export const ARTICLE_FETCH_API = (num) => {
    return `${API_URL}/articles/getarticlebackend/${num}`
};
