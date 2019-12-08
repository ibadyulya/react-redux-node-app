function createValidation(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
        isFormValid = false;
        errors.login = 'Please provide your name.';
    }

    if (!payload || payload.price > 100000 || parseInt(payload, 10)) {
        isFormValid = false;
        errors.password = 'price should be less than 100000$.';
    }

    if (!isFormValid) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors,
    };
}

module.exports = createValidation;
