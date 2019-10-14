import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, LOGIN_FAILED } from '../action.types';

const INITIAL_STATE = {
    email: '',
    password: '',
    uid: '',
    accessToken: '',
    refreshToken: '',
    expirationTime: '',
    isAuthenticated: false,
    isLoading: false,
    error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true,
            };

        case USER_LOGGED_OUT:
            return INITIAL_STATE;

        case LOADING_USER:
            return {
                ...state,
                isLoading: true,
            };

        case LOGIN_FAILED:
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default reducer;
