import { ADD_PAYLINK, GET_PAYLINK, LOADING_PAYLINK, PAYLINK_LOADED, PAYLINK_ERROR } from '../action.types';

const INITIAL_STATE = {
    data: [],
    total: 0,
    last_page: 0,
    per_page: 0,
    current_page: 0,
    from: 0,
    to: 0,
    error: '',
    hasError: false,
    isLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PAYLINK:
            return {
                ...state,
                payLinks: [...state.payLinks, action.payload],
            };

        case GET_PAYLINK:
            return {
                ...state,
                ...action.payload,
            };

        case LOADING_PAYLINK:
            return {
                ...state,
                isLoading: true,
            };

        case PAYLINK_LOADED:
            return {
                ...state,
                isLoading: false,
            };

        case PAYLINK_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                hasError: true,

            };

        default:
            return state;
    }
}

export default reducer;
