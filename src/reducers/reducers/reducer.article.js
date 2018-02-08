import {
    LOAD_ARTICLE_DATA,
    LOAD_ARTICLE_DATA_SUCCESS,
    LOAD_ARTICLE_DATA_ERROR,
    LAZY_LOADER_SUCCESS,
    LAZY_LOADER_ERROR,
    LAZY_LOADER_ACTIVATED
} from '../../constants/index';
import _ from 'lodash';
const initialState = {
    state: [],
    article_data: [],
    more_data: [],
    has_more_items: false,
    error: null
};

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLE_DATA:
            return {
                ...state,
                has_more_items: false
            }
        case LOAD_ARTICLE_DATA_SUCCESS:
        console.log("datalen",action.article_data.length);
            return {
                ...state,
                article_data: action.article_data,
                has_more_items: false,
                error: false
            }
        case LOAD_ARTICLE_DATA_ERROR:
            return {
                ...state,
                has_more_items: false,
                error: true
            }
        case LAZY_LOADER_ACTIVATED:
            return {
                ...state,
                has_more_items: true
            }
        case LAZY_LOADER_SUCCESS:
            return {
                ...state,
                more_data: action.more_data,
                article_data: _.union(state.article_data, action.more_data),
                has_more_items: false,
                error: false
            }

        case LAZY_LOADER_ERROR:
            return {
                ...state,
                has_more_items: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}