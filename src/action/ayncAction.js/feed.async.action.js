import {feedAction} from "../index";

import {FEED_FETCH_API, FEED_DELETE_API, FEED_UPDATE_API} from '../../constants/api';
import {feedCallApi, feedDelete, feedUpdate} from '../../utils/utils';

/**
 *
 * @param {*} city,batchSize,publishedDate
 */
export const loadFeedDataApi = (city, batchSize, publishedDate) => {
    return (dispatch) => {
        dispatch(feedAction.load_feed_data());
        return feedCallApi(FEED_FETCH_API, {city, batchSize, publishedDate}).then((data) => {
            dispatch(feedAction.load_feed_data_success(data.data));
            return Promise.resolve(data.data);
        }).catch((error) => {
            dispatch(feedAction.load_feed_data_error(error));
            return Promise.reject(error);
        })
    }
}
/**
 * function to delete a feed
 * @param {String} feedId
 * @param {String} city
 * @param {String} articleId
 */
export const deleteFeedApi = (feedId, city, articleId) => {
    return (dispatch) => {
        dispatch(feedAction.feed_delete_requested());
        return feedDelete(FEED_DELETE_API(feedId, city, articleId)).then((data) => {
            dispatch(feedAction.feed_delete_success(data.data));
            return Promise.resolve(data.data);
        }).catch((error) => {
            dispatch(feedAction.feed_delete_error(error));
            return Promise.reject(error);
        })
    }
}

/**
 * Function to update publish date in feed data
 * @param {String} feedId
 * @param {String} city
 */

export const updateFeedApi = (feedId, city, data, dateTime, action) => {
    console.log('executed');    
    return (dispatch) => {
        dispatch(feedAction.feed_update_requested());
        return feedUpdate(FEED_UPDATE_API(feedId, city), {data}).then((data) => {
            console.log(data);
            dispatch(feedAction.feed_update_success(feedId, city, data, dateTime, action));
            return Promise.resolve(data.data);
        }).catch((error) => {
            dispatch(feedAction.feed_update_error(error));
            return Promise.reject(error);
        })
    }
}

/**
 * Function to update notify date in feed data
 * @param {String} feedId
 * @param {String} city
 */

// export const updateNotifyFeedApi = (feedId, city, data, dateTime) => {
//     console.log("executed notify");
//     console.log(feedId, city, data, dateTime);
//     return (dispatch) => {
//         dispatch(feedAction.feed_update_requested());
//         return feedUpdate(FEED_UPDATE_API(feedId, city), {data}).then((data) => {
//             console.log(data.data);
//             dispatch(feedAction.feed_update_notify_success(feedId, city, data, dateTime));
//             return Promise.resolve(data.data);
//         }).catch((error) => {
//             dispatch(feedAction.feed_update_notify_error(error));
//             return Promise.reject(error);
//         })
//     }
// }