import ACTION_TYPES from '../constants/action-types';

function success(message) {
    return { type: ACTION_TYPES.ALERT_SUCCESS, message };
}

function error(message) {
    return { type: ACTION_TYPES.ALERT_ERROR, message };
}

function clear() {
    return { type: ACTION_TYPES.ALERT_CLEAR };
}

const alertActions = {
    success,
    error,
    clear,
};

export default alertActions;
