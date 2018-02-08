import {
    LOAD_LISTING_DATA,
    LOAD_LISTING_DATA_SUCCESS,
    LOAD_LISTING_DATA_ERROR,
} from '../../constants/index';

const load_listing_data = () => ({type: LOAD_LISTING_DATA});

const load_listing_data_success = (data) => ({
    type: LOAD_LISTING_DATA_SUCCESS, 
    listing_data: data
})

const load_listing_data_error = (err) => ({type: LOAD_LISTING_DATA_ERROR, err})

export default {
    load_listing_data,
    load_listing_data_error,
    load_listing_data_success,
}