import actionConstants from './actionConstants';

function success(message) {
    return { type: actionConstants.SUCCESS, message };
}

function error(message) {
    return { type: actionConstants.ERROR, message };
}

function clear() {
    return { type: actionConstants.CLEAR };
}

const alertActions = {
    success,
    error,
    clear,
};

export default alertActions;
