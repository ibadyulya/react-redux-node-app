class BaseController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
}

module.exports = BaseController;
