const debug = require('debug')('app:product-controller');
const config = require('config');
const BaseController = require('./base');
const formValidation = require('../../helpers/validators/formValidation');

class ProductController extends BaseController {
    constructor({ productService, logger }) {
        super(productService, logger);
    }

    async create(req, res) {
        this.logger.info('product creating');
        const validationResult = formValidation(req.body);
        if (!validationResult.success) {
            res.status(config.codeStatus.BAD_REQUEST).json({
                success: false,
                message: validationResult.message,
                errors: validationResult.errors,
            });
        }
        debug(req.body);
        await this.service.create(req.body);
        res.status(config.codeStatus.CREATED).json();
    }

    async update(req, res) {
        this.logger.info('product updating');
        const validationResult = formValidation(req.body);
        if (!validationResult.success) {
            res.status(config.codeStatus.BAD_REQUEST).json({
                success: false,
                message: validationResult.message,
                errors: validationResult.errors,
            });
        }
        debug(req.body);
        await this.service.update(req.body);
        res.status(config.codeStatus.ACCEPTED).json();
    }

    async getAll(req, res) {
        // debug(req.params.id);
        this.logger.info('products list reading');
        const result = await this.service.getAll();
        debug(result);
        res.status(config.codeStatus.OK).json(result);
    }

    async filter(req, res) {
        this.logger.info('filtering products list');
        const result = await this.service.filter(req.body);
        debug(result);
        res.status(config.codeStatus.OK).json(result);
    }

    async getOne(req, res) {
        const productID = req.params.id;
        this.logger.info('product by id reading');
        const result = await this.service.getOne(productID);
        debug(result);
        res.status(config.codeStatus.OK).json(result);
    }

    async delete(req, res) {
        debug(req.params.id);
        this.logger.info('deleteSurvey');
        const result = await this.service.delete(req.params.id);
        // debug(result);
        res.status(config.codeStatus.ACCEPTED).json(result);
    }
}

module.exports = ProductController;
