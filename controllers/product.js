
const Product = require('../model/product');
const Cart = require('../model/cart');


exports.getBackToHome = (req, res, next) => { // for getting home button
    let allProducts = Product.getAllProducts();
    res.render('index', { products: allProducts });
};


// get homepage
exports.getHomePage = (req, res, next) => {
    let allProducts = Product.getAllProducts();
    res.render('index', { products: allProducts });
};

// get add product page and save it
exports.getAddProductsPage = (req, res, next) => {
    res.render("add-product");
};
exports.saveProduct = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    const price = req.body.price;
    const imageURL = req.body.imageURL;
    const description = req.body.description;

    const product = new Product(id, name, type, price, imageURL, description);
    product.save();
    // console.log(product);
    res.redirect("/");
};

// edit product and post it 
exports.getEditPage = (req, res, next) => {
    const productId = req.params.prodId;
    // console.log(productId);
    const productToEdit = Product.findProdById(productId);
    // console.log(productToEdit);
    res.render("edit-page", { product: productToEdit });
};
exports.postEditedProduct = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;
    const price = req.body.price;
    const imageURL = req.body.imageURL;
    const description = req.body.description;

    const product = new Product(id, name, type, price, imageURL, description);
    product.update();
    // console.log(product);
    res.redirect("/");
};

// delete a product
exports.deleteProduct = (req, res, next) => {
    const id = req.body.id;
    Product.deleteProduct(id);
    res.redirect("/");
};
// get details of product

exports.getDetailsOfProduct = (req, res, next) => {

    const prodId = req.params.prodId;
    // console.log(prodId);
    const allProducts = Product.findProdById(prodId);
    res.render('details', { products: allProducts });
};

// add to cart 

exports.addToCart = (req, res, next) => {

    const addedProduct = Product.findProdById(req.body.id);
    Cart.save(addedProduct);
    // console.log(Cart.getCart());

    res.redirect("/cart");
    // res.end();

};
exports.getCart = (req, res, next) => {

    res.render("cart", { cart: Cart.getCart() });
};

// delete a cart

exports.deleteCart = (req, res, next) => {
    let prodId = req.body.prodId;
    Cart.deleteCart(prodId);
    // console.log(prodId);
    res.redirect("/cart");
};



  