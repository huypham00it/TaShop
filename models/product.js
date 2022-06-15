const mongoose = require('mongoose');

const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    discount: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', Product)