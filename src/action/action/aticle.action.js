import { LOAD_ARTICLE_DATA, LOAD_ARTICLE_DATA_SUCCESS, LOAD_ARTICLE_DATA_ERROR } from '../../constants/index';

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


export default {
    load_article_data,
    load_article_data_error,
    load_article_data_success,
}