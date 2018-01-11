import { feedAction } from "../index";

import {
    FEED_FETCH_API
} from '../../constants/api';

import {
    feedCallApi
} from '../../utils/utils';

/**
 * 
 * @param {*} num 
 */
export const loadFeedDataApi = (num, city) => {
    return (dispatch) => {
        dispatch(feedAction.load_feed_data());
        return feedCallApi(FEED_FETCH_API(num, city))
            .then((data) => {
                console.log(data.rows.feedArray);
                dispatch(feedAction.load_feed_data_success(data.rows.feedArray));
                return Promise.resolve(data.data);
            })
            .catch((error) => {
                dispatch(feedAction.load_feed_data_error(error));
                return Promise.reject(error);
            })
    }
}