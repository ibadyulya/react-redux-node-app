import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import ProductsListConnect from '../../containers/ProductsListConnect';
import CreateFormConnect from '../../containers/CreateFormConnect';
import ProductCardConnect from '../../containers/ProductCardConnect';
import EditFormConnect from '../../containers/EditFormConnect';


import './styles.less';

export class MainComponent extends React.Component {
    render() {
        return (
            <Router>
                <div className="main-component-container">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Switch>
                            <Route exact path="/" component={ProductsListConnect} />
                            <Route exact path="/create" component={CreateFormConnect} />
                            <Route exact path="/display/:number" component={ProductCardConnect} />
                            <Route exact path="/edit/:number" component={EditFormConnect} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

export default MainComponent;
