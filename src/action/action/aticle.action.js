import {
    LOAD_ARTICLE_DATA,
    LOAD_ARTICLE_DATA_SUCCESS,
    LOAD_ARTICLE_DATA_ERROR,
    ARTICLE_SEARCH_REQUESTED,
    ARTICLE_SEARCH_SUCCESS,
    ARTICLE_SEARCH_ERROR,
    LAZY_LOADER_ACTIVATED,
    LAZY_LOADER_ERROR,
    LAZY_LOADER_SUCCESS
} from '../../constants/index';

const load_article_data = () => ({type: LOAD_ARTICLE_DATA});

const load_article_data_success = (data) => ({type: LOAD_ARTICLE_DATA_SUCCESS, article_data: data})

const load_article_data_error = (err) => ({type: LOAD_ARTICLE_DATA_ERROR, err})

const article_search_requested = () => ({type: ARTICLE_SEARCH_REQUESTED})

const article_search_success = (filteredData) => ({type: ARTICLE_SEARCH_SUCCESS, article_data: filteredData})

const article_search_error = (err) => ({type: ARTICLE_SEARCH_ERROR, err})

const async_lazy_loading_activated = () => {
    return {type: LAZY_LOADER_ACTIVATED}
}

const async_lazy_loading_success = (data) => {
    return {type: LAZY_LOADER_SUCCESS, more_data: data}
}
const async_lazy_loading_error = (error) => {
    return {type: LAZY_LOADER_ERROR, error}
};

export default {
    load_article_data,
    load_article_data_error,
    load_article_data_success,
    article_search_requested,
    article_search_success,
    article_search_error,
    async_lazy_loading_activated,
    async_lazy_loading_error,
    async_lazy_loading_success
}