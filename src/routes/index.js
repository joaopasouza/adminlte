import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PayLinkList from '../pages/PayLinkList';
import PayLinkForm from '../pages/PayLinkForm';

export const getRoutes = store => {
    return (
        <Switch>
            <Route exact path="/paylink" component={PayLinkList} />
            <Route exact path="paylink/add" component={PayLinkForm} />
        </Switch>
    );
}
