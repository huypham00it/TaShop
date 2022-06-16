const router = require('express').Router();
const adminController = require('../controllers/admin');

// dashboard
router.get('/dashboard', adminController.getDashboard);

// product
router.get('/product/add-product', adminController.getAddProduct)

router.post('/product/add-product', adminController.postAddProduct)

// store
router.get('/product/add-store', adminController.getAddStore)

router.post('/product/add-store', adminController.postAddStore)

// shopee
router.get('/product/add-shopee', adminController.getAddShopee)

router.post('/product/add-shopee', adminController.postAddShopee)

module.exports = router;