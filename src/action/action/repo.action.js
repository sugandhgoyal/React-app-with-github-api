import {
    LOAD_REPO_DATA,
    LOAD_REPO_DATA_SUCCESS,
    LOAD_REPO_DATA_ERROR,
    LOAD_LANGUAGES,
    LOAD_LANGUAGES_SUCCESS,
    LOAD_LANGUAGES_ERROR,
    LOAD_STARS,
    LOAD_STARS_SUCCESS,
    LOAD_STARS_ERROR,
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

const load_repo_data = () => ({type: LOAD_REPO_DATA});

const load_repo_data_success = (data) => ({type: LOAD_REPO_DATA_SUCCESS, repo_data: data})

const load_repo_data_error = (err) => ({type: LOAD_REPO_DATA_ERROR, err})

const load_languages = () => ({type: LOAD_LANGUAGES});

const load_languages_success = (data) => ({type: LOAD_LANGUAGES_SUCCESS, languages: data})

const load_languages_error = (err) => ({type: LOAD_LANGUAGES_ERROR, err})

const load_stars = () => ({type: LOAD_STARS});

const load_stars_success = (data) => ({type: LOAD_STARS_SUCCESS, stars: data.stargazers_count})

const load_stars_error = (err) => ({type: LOAD_STARS_ERROR, err})

const load_filter_data = () => ({type: LOAD_FILTER_DATA});

const load_filter_data_success = (data) => ({type: LOAD_FILTER_DATA_SUCCESS, filter_data: data})

const load_filter_data_error = (err) => ({type: LOAD_FILTER_DATA_ERROR, err})

const repo_search = () => ({type: REPO_SEARCH});

const repo_search_success = (data) => ({type: REPO_SEARCH_SUCCESS, search_data: data.items})

const repo_search_error = (err) => ({type: REPO_SEARCH_ERROR, err})

const async_lazy_loading_activated = () => {
    return {type: LAZY_LOADER_ACTIVATED}
}

const async_lazy_loading_success = (data) => {
    return {
        type: LAZY_LOADER_SUCCESS, 
        more_data: data,
     }
}

const async_lazy_loading_error = (error) => {
    return {type: LAZY_LOADER_ERROR, error}
};

export default {
    load_repo_data,
    load_repo_data_error,
    load_repo_data_success,
    load_languages,
    load_languages_success,
    load_languages_error,
    load_stars,
    load_stars_success,
    load_stars_error,
    load_filter_data,
    load_filter_data_success,
    load_filter_data_error,
    repo_search,
    repo_search_error,
    repo_search_success,
    async_lazy_loading_activated,
    async_lazy_loading_error,
    async_lazy_loading_success
}