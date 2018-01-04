import { articleAction } from "../index";

import {
    ARTICLE_FETCH_API
} from '../../constants/api';

import {
    getCallApi
} from '../../utils/utils';

/**
 * 
 * @param {*} num 
 */
export const loadArticleDataApi = (num) => {
    return (dispatch) => {
        dispatch(articleAction.load_article_data());
        return getCallApi(ARTICLE_FETCH_API(num))
            .then((data) => {
                dispatch(articleAction.load_article_data_success(data.data));
                return Promise.resolve(data.data);
            })
            .catch((error) => {
                dispatch(articleAction.load_article_data_error(error));
                return Promise.reject(error);
            })
    }
}