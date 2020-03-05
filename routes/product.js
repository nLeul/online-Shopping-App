const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/', productController.getHomePage);

router.get('/Add-product', productController.getAddProductsPage);
router.post('/save-product', productController.saveProduct);



router.get('/Edit-product', productController.getEditPage);
router.post("/post-prod", productController.postEditedProduct);

 router.get("/delete-product", productController.deleteProduct);

module.exports = router;