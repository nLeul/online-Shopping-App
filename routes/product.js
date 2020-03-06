const router = require('express').Router();
const productController = require('../controllers/product');


router.get('/home-page',productController.getBackToHome)// for the home button

// get homepage
router.get('/', productController.getHomePage);

// get add product page and save it
router.get('/Add-product', productController.getAddProductsPage);
router.post('/save-product', productController.saveProduct);


// edit product and post it 

router.get('/Edit-product/:prodId', productController.getEditPage);
router.post("/post-prod", productController.postEditedProduct);

// delete a product
router.post("/delete-product", productController.deleteProduct);

// get details of product

router.get('/details/:prodId',productController.getDetailsOfProduct)
 


module.exports = router;