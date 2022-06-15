const mongoose = require('mongoose');

const Preferential = mongoose.Schema({
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

module.exports = mongoose.model('ShopeePreferential', Preferential)