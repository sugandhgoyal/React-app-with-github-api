import { HEADER_DATA, HEADER_DATA_SUCCESS, HEADER_DATA_ERROR } from '../../constants/index';

const initialState = {
    state: [],
    header_data:false,
    error: null,
};


export const headerReducer = (state = initialState, action) => {
    switch (action.type) {

        case HEADER_DATA:
            return {
                ...state,
            }
        case HEADER_DATA_SUCCESS:
            return {
                ...state,
                header_data: action.header_data,
                error: false,
            }
        case HEADER_DATA_ERROR:
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