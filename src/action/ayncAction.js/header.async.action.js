import { headerAction } from "../index";

export const getPropsFromHeader = (data) => {
    return (dispatch) => {
        dispatch(headerAction.header_data());
        return dispatch(headerAction.header_data_success(data));
    }
}
