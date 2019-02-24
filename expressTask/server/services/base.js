class BaseService {
    constructor(entityRepository) {
        this.repository = entityRepository;
    }

    async create(entity) {
        const document = await this.repository.create(entity);
        return document;
    }

    async getById(id) {
        const document = await this.repository.getById(id);
        return document;
    }

    async getAll() {
        const document = await this.repository.get();
        return document;
    }

    async deleteById(id) {
        const documents = await this.repository.deleteById(id);
        return documents;
    }

    async updateById(entity) {
        const documents = await this.repository.updateById(entity);
        return documents;
    }
}

module.exports = BaseService;
