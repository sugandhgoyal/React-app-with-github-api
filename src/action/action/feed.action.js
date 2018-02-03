import {
    LOAD_FEED_DATA,
    LOAD_FEED_DATA_SUCCESS,
    LOAD_FEED_DATA_ERROR,
    FEED_DELETE_ERROR,
    FEED_DELETE_REQUESTED,
    FEED_DELETE_SUCCESS,
    FEED_UPDATE_REQUESTED,
    FEED_UPDATE_SUCCESS,
    FEED_UPDATE_ERROR,
    // FEED_UPDATE_NOTIFY_ERROR,
    // FEED_UPDATE_NOTIFY_REQUESTED,
    // FEED_UPDATE_NOTIFY_SUCCESS
} from '../../constants/index';

const load_feed_data = () => ({type: LOAD_FEED_DATA});

const load_feed_data_success = (data) => ({type: LOAD_FEED_DATA_SUCCESS, feed_data: data})

const load_feed_data_error = (err) => ({type: LOAD_FEED_DATA_ERROR, err})

const feed_delete_requested = () => ({type: FEED_DELETE_REQUESTED});
const feed_delete_success = (data) => ({type: FEED_DELETE_SUCCESS, deleted_feed: data.message});
const feed_delete_error = () => ({type: FEED_DELETE_ERROR});

const feed_update_requested = () => ({type: FEED_UPDATE_REQUESTED});
const feed_update_success = (feedId, city, data, dateTime, action) => ({
    type: FEED_UPDATE_SUCCESS,
    updated_feed: data.data.feed,
    feedId: feedId,
    dateTime: dateTime,
    city: city,
    publishDate: dateTime,
    action: action
});
const feed_update_error = () => ({type: FEED_UPDATE_ERROR});

// const feed_update_notify_requested = () => ({type: FEED_UPDATE_NOTIFY_REQUESTED});
// const feed_update_notify_success = (feedId, city, data, dateTime, action) => ({
//     type: FEED_UPDATE_NOTIFY_SUCCESS,
//     updated_feed: data.data.message,
//     feedId: feedId,
//     dateTime: dateTime,
//     city: city,
//     notifyDate: dateTime,
//     action: action
// });
// const feed_update_notify_error = () => ({type: FEED_UPDATE_NOTIFY_ERROR});

export default {
    load_feed_data,
    load_feed_data_error,
    load_feed_data_success,
    feed_update_requested,
    feed_update_success,
    feed_update_error,
    // feed_update_notify_error,
    // feed_update_notify_requested,
    // feed_update_notify_success,
    feed_delete_error,
    feed_delete_requested,
    feed_delete_success
}