import React from 'react';

import { HashRouter as Router } from 'react-router-dom';

import Header from './Header';
import Routes from '../Routes';

import './styles.less';

const App = () => (
    <Router>
        <div className="main-component-container">
            <header>
                <Header />
            </header>
            <main>
                <Routes />
            </main>
        </div>
    </Router>
);


export default App;
