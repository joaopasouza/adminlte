import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../pages/Auth';
import PayLinkList from '../pages/PayLinkList';
import PayLinkForm from '../pages/PayLinkForm';

export const getRoutes = store => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={
                props => {
                    if (store.getState().user.isAuthenticated) {
                        return <Component {...props} />;
                    }
                    return <Redirect to="/" />;
                }
            }
        />
    );

    const AuthRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={
                props => {
                    if (!store.getState().user.isAuthenticated) {
                        return <Component {...props} />;
                    }
                    return <Redirect to="/paylink" />;
                }
            }
        />
    );

    return (
        <Switch>
            <AuthRoute exact path="/" component={Auth} />
            <PrivateRoute exact path="/paylink" component={PayLinkList} />
            <PrivateRoute exact path="paylink/add" component={PayLinkForm} />
        </Switch>
    );
}
