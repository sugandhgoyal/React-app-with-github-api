import { LOAD_FEED_DATA, LOAD_FEED_DATA_SUCCESS, LOAD_FEED_DATA_ERROR } from '../../constants/index';

const initialState = {
    state: [],
    feed_data: [],
    publisher_data: [],
    total_data: [],
    error: null,
};

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_FEED_DATA:
            return {
                ...state,
            }
        case LOAD_FEED_DATA_SUCCESS:
            return {
                ...state,
                total_data: action.feed_data,
                feed_data: action.feed_data.feed,
                publisher_data: action.feed_data.publishers,
                error: false,
            }
        case LOAD_FEED_DATA_ERROR:
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