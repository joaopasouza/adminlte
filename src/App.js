import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import storeConfig from './store/storeConfig';
import { getRoutes } from './routes';
import { saveState } from './store/StateLoader';

import API from './services/api.service';

const store = storeConfig();

store.subscribe(() => {
    saveState({ user: store.getState().user });
});

API.interceptors.request.use(
    async (config) => {
        const token = store.getState().user.accessToken;
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

function App() {
    return (
        <Provider store={store}>
            <HashRouter>{getRoutes(store)}</HashRouter>
        </Provider>
    );
}

export default App;
