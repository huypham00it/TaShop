const Product = require('../models/product');
const Store = require('../models/store-preferential');
const Shopee = require('../models/shopee-preferential');

// Dashboard
exports.getDashboard = (req, res) => {
    Product.find()
    .then(result => {
        res.render('admin/index');
    })
    .catch(err => console.log(err))
}

// Product
exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        msg: '',
        data: null
    })
}

exports.postAddProduct = (req, res) => {
    const { name, link, image, price, discount } = req.body;
    Product.findOne({link: link})
    .then(product => {
        if(product){
            return res.render('admin/add-product', {
                msg: 'Sản phẩm này đã được thêm :(',
                data: image
            })
        }

        return Product.create({name, link, image, price, discount});
    })   
    .then(result => {    
        res.render('admin/add-product', {
            msg: 'Thêm sản phẩm thành công ^^!',
            data: image,
        });
    })
    .catch(err => console.log(err));

}

// Store
exports.getAddStore = (req, res) => {
    res.render('admin/add-store',{
        msg: '',
        data: null
    })
}

exports.postAddStore = (req, res) => {
    const { name, link, image} = req.body;
    Store.findOne({link: link})
    .then(store => {
        if(store){
            return res.render('admin/add-store', {
                msg: 'Cửa hàng này đã được thêm :(!',
                data: image,
            });
        }
        
        return Store.create({name, link, image});

    })  
    .then(result => {        
        res.render('admin/add-store', {
            msg: 'Thêm cửa hàng thành công ^^!',
            data: image,
        });
    })
    .catch(err => console.log(err));

}

// Shopee
exports.getAddShopee = (req, res) => {
    res.render('admin/add-shopee',{
        msg: '',
        data: null
    })
}

exports.postAddShopee = (req, res) => {
    const { name, link, image } = req.body;

    Shopee.findOne({link: link})
    .then(shopee => {
        if(shopee){
            return res.render('admin/add-shopee', {
                msg: 'Ưu đãi này đã được thêm :(!',
                data: image,
            });
        }

        return Shopee.create({name, link, image})
    })
    .then(result => {
        res.render('admin/add-shopee', {
            msg: 'Thêm ưu đãi Shopee thành công ^^!',
            data: image,
        });
    })
    .catch(err => console.log(err));

}