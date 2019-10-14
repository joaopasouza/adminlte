import { ADD_PAYLINK, GET_PAYLINK, LOADING_PAYLINK, PAYLINK_LOADED, PAYLINK_ERROR } from '../action.types';
import API from '../../services/api.service';

export const addPayLink = payLink => ({
    type: ADD_PAYLINK,
    payload: payLink,
});

export const getPayLinks = payLinks => ({
    type: GET_PAYLINK,
    payload: payLinks,
});

export const payLinkLoading = () => ({
    type: LOADING_PAYLINK,
});

export const payLinkLoaded = () => ({
    type: PAYLINK_LOADED,
});

export const payLinkError = error => ({
    type: PAYLINK_ERROR,
    payload: error,
});

export const createPayLink = paylink => async dispatch => {
    dispatch(payLinkLoading());
    try {
        const response = await API.post('pay/link', paylink);
        dispatch(addPayLink({ ...paylink, ...response.data }));
        console.log(response.data);
    } catch (error) {
        dispatch(payLinkError(error));
        console.log(error);
    }
};

export const retrievePayLinks = () => async dispatch => {
    dispatch(payLinkLoading());
    try {
        const res = await API.get('/pay/link');
        console.log(res);
        dispatch(getPayLinks(res.data));
    } catch (error) {
        console.log(error);
        dispatch(payLinkError(error));
    }
};
