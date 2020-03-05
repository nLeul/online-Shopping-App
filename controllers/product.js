
const Product = require('../model/product');





// get homepage
exports.getHomePage = (req, res, next) => {
    let allProducts=Product.getAllProducts();
    res.render('index',{products:allProducts});
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
    console.log(product);
    res.redirect("/");
};

// edit product and post it 
exports.getEditPage = (req, res, next) => {
    res.render("edit-page");
};
exports.postEditedProduct = (req, res, next) => {
    res.send("edited posting");
};

// delete a product
exports.deleteProduct = (req, res, next) => {
    res.send("deleted");
};

