import { LOAD_ARTICLE_DATA, LOAD_ARTICLE_DATA_SUCCESS, LOAD_ARTICLE_DATA_ERROR } from '../../constants/index';

const initialState = {
    state: [],
    article_data: [],
    error: null,
};


export const articleReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_ARTICLE_DATA:
            return {
                ...state,
            }
        case LOAD_ARTICLE_DATA_SUCCESS:
            return {
                ...state,
                article_data: action.article_data,
                error: false,
            }
        case LOAD_ARTICLE_DATA_ERROR:
            return {
                ...state,
                error: true,
            }
        default:
            return {
                ...state
            }
    }
}