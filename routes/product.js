const router = require('express').Router();
const productController = require('../controllers/product');

// get homepage
router.get('/', productController.getHomePage);

// get add product page and save it
router.get('/Add-product', productController.getAddProductsPage);
router.post('/save-product', productController.saveProduct);


// edit product and post it 

router.get('/Edit-product', productController.getEditPage);
router.post("/post-prod", productController.postEditedProduct);

// delete a product
router.post("/delete-product", productController.deleteProduct);
 


module.exports = router;