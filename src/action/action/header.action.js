import { HEADER_DATA, HEADER_DATA_SUCCESS, HEADER_DATA_ERROR } from '../../constants/index';

const header_data = () => ({
    type: HEADER_DATA
});

const header_data_success = (data) => ({
    type: HEADER_DATA_SUCCESS,
    header_data: data,
})

const header_data_error = (err) => ({
    type: HEADER_DATA_ERROR,
    err,
})

export default {
    header_data,
    header_data_error,
    header_data_success,
}