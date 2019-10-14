import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, LOGIN_FAILED } from '../action.types';
import API from '../../services/api.service';

export const userLoading = () => ({
    type: LOADING_USER
});

export const loginFailed = () => ({
    type: LOGIN_FAILED,
});

export const userLogged = user => ({
    type: USER_LOGGED_IN,
    payload: user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = user => async dispatch => {
    dispatch(userLoading());
    try {
        const res = await API.post('/auth/login', user);
        dispatch(userLogged({ ...user, ...res.data }));
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const logout = () => dispatch => {
    window.localStorage.clear();
    dispatch(userLoggedOut());
};
