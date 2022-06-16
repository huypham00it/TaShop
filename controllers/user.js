const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.find()
        .then(products => {
            res.render('index',{
                products
            });
        })
        .catch(err => console.log(err));
}