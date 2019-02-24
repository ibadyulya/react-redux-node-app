import { connect } from 'react-redux';
// import alertActions from '../actions/alertActions';

import { MainComponent } from '../components/MainComponent';

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert,
    };
}

const AppConnect = connect(
    mapStateToProps,
)(MainComponent);

export default AppConnect;
