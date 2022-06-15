const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Product must be at least 2 characters long"]
    },
    price: {
        type: Number,
        min: [0.1, "Price must be at least 1 cent"]
    },
    description: {
        type: String,
        required: [true, "Product description required"],
        minlength: [5, "Product description must be at least 5 characters long"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema)