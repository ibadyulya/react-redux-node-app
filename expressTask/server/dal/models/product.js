const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const models = require('./models.json');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        // index: { unique: true },
    },
    category: {
        type: String,
    },
    price: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

/**
 * The pre-save hook method.
 */
ProductSchema.pre('save', function saveHook(next) {
    const product = this;
    // proceed further only if the password is modified or the user is new
    if (!product) return next();
    return next();
});


module.exports = mongoose.model(models.PRODUCT, ProductSchema);
