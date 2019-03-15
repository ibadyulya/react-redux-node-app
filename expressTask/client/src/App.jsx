
import * as React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import AppConnect from './containers/AppConnect';

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppConnect />
            </Provider>
        );
    }
}

export default App;
