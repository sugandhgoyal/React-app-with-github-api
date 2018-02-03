import {
    LOAD_FEED_DATA,
    LOAD_FEED_DATA_SUCCESS,
    LOAD_FEED_DATA_ERROR,
    FEED_DELETE_REQUESTED,
    FEED_DELETE_SUCCESS,
    FEED_DELETE_ERROR,
    FEED_UPDATE_REQUESTED,
    FEED_UPDATE_SUCCESS,
    FEED_UPDATE_ERROR,
    // FEED_UPDATE_NOTIFY_REQUESTED,
    // FEED_UPDATE_NOTIFY_SUCCESS,
    // FEED_UPDATE_NOTIFY_ERROR
} from '../../constants/index';
import _ from 'lodash';
//import { start } from 'repl';

const initialState = {
    state: [],
    feed_data: [],
    feedId: '',
    dateTime: '',
    action: '',
    deleted_feed: '',
    updated_feed: '',
    notifyDate: '',
    publisher_data: [],
    article_data: [],
    error: null
};

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_FEED_DATA:
            return {
                ...state
            }
        case LOAD_FEED_DATA_SUCCESS:
            return {
                ...state,
                article_data: action.feed_data.articles,
                feed_data: action.feed_data.feed,
                publisher_data: action.feed_data.publishers,
                error: false
            }
        case LOAD_FEED_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        case FEED_DELETE_REQUESTED:
            return {
                ...state
            }
        case FEED_DELETE_SUCCESS:
            return {

                ...state,
                deleted_feed: action.deleted_feed
            }
        case FEED_DELETE_ERROR:
            return {
                ...state,
                error: true
            }
        case FEED_UPDATE_REQUESTED:
            return {
                ...state
            }
        case FEED_UPDATE_SUCCESS:
            const tempFeedData = state.feed_data;
            console.log("updated",action.updated_feed.NotifyDate);
            tempFeedData[_.findIndex(tempFeedData, {_id: action.feedId})] = action.updated_feed;
            console.log(tempFeedData[_.findIndex(tempFeedData, {_id: action.feedId})]);
            return {
                ...state,
                feedId: action.feedId,
                action: action.action,
                feed_data: tempFeedData,
                update_feed: tempFeedData,
                publishDate: action.publishDate,
                notifyDate:action.updated_feed.NotifyDate
            }
        case FEED_UPDATE_ERROR:
            return {
                ...state,
                error: true
            }
        // case FEED_UPDATE_NOTIFY_REQUESTED:
        //     return {
        //         ...state
        //     }
        // case FEED_UPDATE_NOTIFY_SUCCESS:
        //     console.log("nfdt", action.notifyDate);
        //     return {
        //         ...state,
        //         feedId: action.feedId,
        //         notifyDate: action.notifyDate
        //     }
        // case FEED_UPDATE_NOTIFY_ERROR:
        //     return {
        //         ...state,
        //         error: true
        //     }
        default:
            return {
                ...state
            }
    }
}