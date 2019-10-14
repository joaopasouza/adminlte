import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from './reducers/user';
import payLinkReducer from './reducers/paylink';

import { loadState } from './StateLoader';

const reducers = combineReducers({
    user: userReducer,
    paylink: payLinkReducer,
});

const storeConfig = () => createStore(reducers, loadState(), composeWithDevTools((applyMiddleware(thunk))));

export default storeConfig;
