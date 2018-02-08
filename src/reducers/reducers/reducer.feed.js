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
    FEED_FILTER_REQUESTED,
    FEED_FILTER_SUCCESS,
    FEED_FILTER_ERROR
} from '../../constants/index';
import _ from 'lodash';

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
        case FEED_FILTER_REQUESTED:
            return {
                ...state
            }
        case FEED_FILTER_SUCCESS:
        const tempData = action.feed_data.feed;
        if(action.feature === true){
            _.find(tempData, function(o) { action.feed_data.feed.sponsored == 1 && action.feed_data.feed.ourPicks == 1});
        }
        else if(action.feature === false){
            _.find(tempData, function(o) { action.feed_data.feed.sponsored == 0 || action.feed_data.feed.ourPicks == 0});
            console.log(tempData);
        }
            return {
                ...state,
                article_data: action.feed_data.articles,
                feed_data:tempData,
                publisher_data: action.feed_data.publishers,
                error: false
            }
        case FEED_FILTER_ERROR:
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