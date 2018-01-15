import { feedAction } from "../index";

import {
    FEED_FETCH_API
} from '../../constants/api';
import {
    feedCallApi
} from '../../utils/utils';

/**
 * 
 * @param {*} city,batchSize,publishedDate
 */
export const loadFeedDataApi = (city, batchSize, publishedDate) => {
    return (dispatch) => {
        dispatch(feedAction.load_feed_data());
        return feedCallApi(FEED_FETCH_API, {
            city: city,
            batchSize: batchSize,
            publishedDate: publishedDate,
        })
            .then((data) => {
                dispatch(feedAction.load_feed_data_success(data.data));
                return Promise.resolve(data.data);
            })
            .catch((error) => {
                dispatch(feedAction.load_feed_data_error(error));
                return Promise.reject(error);
            })
    }
}