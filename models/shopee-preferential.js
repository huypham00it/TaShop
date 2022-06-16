const mongoose = require('mongoose');

const Shoppe = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ShopeePreferential', Shoppe)