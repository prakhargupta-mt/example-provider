const Product = require('./product');

class ProductRepository {

    constructor() {
        // this.products = new Map([
        //     ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1")],
        //     ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1")],
        //     ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2")],
        // ]);

        // New field introduced Price
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1", "red", 30.0)],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1","red", 35.0)],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2","red", 40.0)],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
}

module.exports = ProductRepository;
