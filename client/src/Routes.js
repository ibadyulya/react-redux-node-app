import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './constants';

import {
    ProductsListConnect,
    CreateFormConnect,
    ProductCardConnect
} from './containers';

const Routes = () => (
    <Switch>
        <Route exact path={routes.main} component={ProductsListConnect} />
        <Route
            exact
            path={routes['product.create']}
            component={CreateFormConnect}
        />
        <Route
            exact
            path={routes['product.display']}
            component={ProductCardConnect}
        />
        <Route
            exact
            path={routes['product.edit']}
            component={CreateFormConnect}
        />
    </Switch>
);

export default Routes;
