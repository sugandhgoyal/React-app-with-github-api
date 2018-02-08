import {listingAction} from "../index";

import {LISTING_FETCH_API} from '../../constants/api';
import {feedCallApi} from '../../utils/utils';

/**
 * Function to load listing data api
 * @param {*} batchsize,skip
 */
export const loadlistingDataApi = (batchsize, skip) => {
    return (dispatch) => {
        dispatch(listingAction.load_listing_data());
        return feedCallApi(LISTING_FETCH_API, {batchsize, skip}).then((data) => {
            dispatch(listingAction.load_listing_data_success(data.data));
            return Promise.resolve(data.data);
        }).catch((error) => {
            dispatch(listingAction.load_listing_data_error(error));
            return Promise.reject(error);
        })
    }
}