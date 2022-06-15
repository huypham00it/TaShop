const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.find()
        .then(result => {
            res.render('index');
        })
        .catch(err => console.log(err));
}