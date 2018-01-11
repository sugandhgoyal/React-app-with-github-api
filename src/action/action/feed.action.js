import { LOAD_FEED_DATA, LOAD_FEED_DATA_SUCCESS, LOAD_FEED_DATA_ERROR } from '../../constants/index';

const load_feed_data = () => ({
    type: LOAD_FEED_DATA
});

const load_feed_data_success = (data) => ({
    type: LOAD_FEED_DATA_SUCCESS,
    feed_data: data,
})

const load_feed_data_error = (err) => ({
    type: LOAD_FEED_DATA_ERROR,
    err,
})


export default {
    load_feed_data,
    load_feed_data_error,
    load_feed_data_success,
}