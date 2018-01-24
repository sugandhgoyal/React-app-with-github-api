import {
    LOAD_ARTICLE_DATA, LOAD_ARTICLE_DATA_SUCCESS, LOAD_ARTICLE_DATA_ERROR,
    ARTICLE_SEARCH_REQUESTED, ARTICLE_SEARCH_SUCCESS, ARTICLE_SEARCH_ERROR
} from '../../constants/index';

const load_article_data = () => ({
    type: LOAD_ARTICLE_DATA
});

const load_article_data_success = (data) => ({
    type: LOAD_ARTICLE_DATA_SUCCESS,
    article_data: data,
})

const load_article_data_error = (err) => ({
    type: LOAD_ARTICLE_DATA_ERROR,
    err,
})

const article_search_requested = () => ({
    type: ARTICLE_SEARCH_REQUESTED
})

const article_search_success = (filteredData) => ({
    type: ARTICLE_SEARCH_SUCCESS,
    article_data: filteredData,
})

const article_search_error = (err) => ({
    type: ARTICLE_SEARCH_ERROR,
    err,
})

export default {
    load_article_data,
    load_article_data_error,
    load_article_data_success,
}