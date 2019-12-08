const API_ACTION_STATES = {
    request: type => ({ type }),
    success: (type, payload) => ({ type, payload }),
    failure: (type, message) => ({ type, message })
};

export default API_ACTION_STATES;
