import {
    LOAD_REPO_DATA,
    LOAD_REPO_DATA_SUCCESS,
    LOAD_REPO_DATA_ERROR,
    LOAD_LANGUAGES,
    LOAD_LANGUAGES_SUCCESS,
    LOAD_LANGUAGES_ERROR,
    LOAD_STARS,
    LOAD_STARS_ERROR,
    LOAD_STARS_SUCCESS,
    LOAD_FILTER_DATA,
    LOAD_FILTER_DATA_ERROR,
    LOAD_FILTER_DATA_SUCCESS,
    REPO_SEARCH,
    REPO_SEARCH_ERROR,
    REPO_SEARCH_SUCCESS,
    LAZY_LOADER_ACTIVATED,
    LAZY_LOADER_ERROR,
    LAZY_LOADER_SUCCESS
} from '../../constants/index';


var _ = {
    union: require('lodash/union')
};

const initialState = {
    state: {},
    stars: 0,
    languages: {},
    repo_data: [],
    filter_data: [],
    has_more_items: false,
    error: null
};

export const repoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REPO_DATA:
            return {
                ...state
            }
        case LOAD_REPO_DATA_SUCCESS:
            return {
                ...state,
                repo_data: action.repo_data,
                error: false
            }
        case LOAD_REPO_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        case LOAD_LANGUAGES:
            return {
                ...state
            }
        case LOAD_LANGUAGES_SUCCESS:
            return {
                ...state,
                languages: action.languages,
                error: false
            }
        case LOAD_LANGUAGES_ERROR:
            return {
                ...state,
                error: true
            }
        case LOAD_STARS:
            return {
                ...state
            }
        case LOAD_STARS_SUCCESS:
            return {
                ...state,
                stars: action.stars,
                error: false
            }
        case LOAD_STARS_ERROR:
            return {
                ...state,
                error: true
            }
        case LOAD_FILTER_DATA:
            return {
                ...state
            }
        case LOAD_FILTER_DATA_SUCCESS:
            return {
                ...state,
                repo_data: action.filter_data,
                filter_data: action.filter_data,
                error: false
            }
        case LOAD_FILTER_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        case REPO_SEARCH:
            return {
                ...state
            }
        case REPO_SEARCH_SUCCESS:
            return {
                ...state,
                repo_data: action.search_data,
                error: false
            }
        case REPO_SEARCH_ERROR:
            return {
                ...state,
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
                repo_data: _.union(state.repo_data, action.more_data),
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