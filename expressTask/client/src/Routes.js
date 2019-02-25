import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './constants';

import {
    ProductsListConnect,
    CreateFormConnect,
    DisplayFormConnect,
    EditFormConnect,
} from './containers';

const Routes = () => (
    <Switch>
        <Route exact path={routes.main} component={ProductsListConnect} />
        <Route exact path={routes['product.create']} component={CreateFormConnect} />
        <Route exact path={routes['product.display']} component={DisplayFormConnect} />
        <Route exact path={routes['product.edit']} component={EditFormConnect} />
    </Switch>
);


export default Routes;
