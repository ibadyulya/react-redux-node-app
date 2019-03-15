import React from 'react';

import { HashRouter as Router } from 'react-router-dom';

import Header from './Header';
import Routes from '../Routes';

import './styles.less';

const App = () => (
    <Router>
        <div className="app">
            <header>
                <Header />
            </header>
            <div className="app-body">
                <Routes />
            </div>
        </div>
    </Router>
);


export default App;
