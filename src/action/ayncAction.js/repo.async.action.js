import {repoAction} from "../index";

import {FILTER_DATA, FETCH_SEARCH_DATA, FETCH_PUBLIC_REPOS, FETCH_PUBLIC_REPOS_STARS} from '../../constants/api';

import {getCallApi} from '../../utils/utils';

/**
 *
 * @param {*} num
 */
export const loadRepoDataApi = (loadingType,skip) => {
    if (loadingType === 'firstLoad') {
        return (dispatch) => {
            dispatch(repoAction.load_repo_data());
            return getCallApi(FETCH_PUBLIC_REPOS).then((data) => {
                dispatch(repoAction.load_repo_data_success(data.slice(0,skip)));
                return Promise.resolve(data);
            }).catch((error) => {
                dispatch(repoAction.load_repo_data_error(error));
                return Promise.reject(error);
            })
        }
    }
    if (loadingType === 'lazyLoad') {
        return (dispatch) => {
            dispatch(repoAction.async_lazy_loading_activated());
            return getCallApi(FETCH_PUBLIC_REPOS).then((data) => {
                console.log("lazyload",data.slice(0,skip));
                dispatch(repoAction.async_lazy_loading_success(data.slice(0,skip)));
                return Promise.resolve(data.data);
            }).catch((error) => {
                dispatch(repoAction.async_lazy_loading_error(error));
                return Promise.reject(error);
            })
        }
    }
}

/**
 *
 * @param {*} num
 */
export const getLanguagesApi = (url) => {
    return (dispatch) => {
        dispatch(repoAction.load_languages());
        return getCallApi(url).then((data) => {
            dispatch(repoAction.load_languages_success(data));
            return Promise.resolve(data);
        }).catch((error) => {
            dispatch(repoAction.load_languages_error(error));
            return Promise.reject(error);
        })
    }
}

/**
 *
 * @param {*} num
 */
export const getStarsApi = (owner, reponame) => {
    return (dispatch) => {
        dispatch(repoAction.load_stars());
        return getCallApi(FETCH_PUBLIC_REPOS_STARS(owner, reponame)).then((data) => {
            dispatch(repoAction.load_stars_success(data));
            return Promise.resolve(data);
        }).catch((error) => {
            dispatch(repoAction.load_stars_error(error));
            return Promise.reject(error);
        })
    }
}

/**
 *
 * @param {*} num
 */
export const searchApiCall = (owner, name) => {
    return (dispatch) => {
        dispatch(repoAction.repo_search());
        return getCallApi(FETCH_SEARCH_DATA(owner, name)).then((data) => {
            dispatch(repoAction.repo_search_success(data));
            return Promise.resolve(data);
        }).catch((error) => {
            dispatch(repoAction.lrepo_search_error(error));
            return Promise.reject(error);
        })
    }
}

/**
 *
 * @param {*} num
 */
export const filterApiFunction = (filter) => {
    return (dispatch) => {
        dispatch(repoAction.load_filter_data());
        return getCallApi(FILTER_DATA(filter)).then((data) => {
            console.log(data);
            dispatch(repoAction.load_filter_data_success(data.items));
            return Promise.resolve(data);
        }).catch((error) => {
            dispatch(repoAction.load_filter_data_error(error));
            return Promise.reject(error);
        })
    }
}