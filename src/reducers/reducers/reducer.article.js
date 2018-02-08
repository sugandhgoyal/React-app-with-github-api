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
    error: null
};

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_ARTICLE_DATA:
            return {
                ...state
            }
        case LOAD_ARTICLE_DATA_SUCCESS:
            return {
                ...state,
                article_data: action.article_data,
                error: false
            }
        case LOAD_ARTICLE_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        case LAZY_LOADER_ACTIVATED:
            return {
                ...state
            }
        case LAZY_LOADER_SUCCESS:
            
            console.log("comafter",action);
            return {
                ...state,
                more_data: action.more_data,
                article_data: _.union(state.article_data, action.more_data),
                error: false
            }
        case LAZY_LOADER_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}