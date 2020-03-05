exports.getHomePage = (req, res, next) => {
    res.render('index');
}
exports.getAddProductsPage = (req, res, next) => {
    res.render("add-product");
};
exports.getEditPage=(req, res, next) => {
    res.render("edit-page");
};
exports.postEditedProduct=(req, res, next) => {
    res.send("edited posting");
};
exports.saveProduct=(req, res, next) => {
    res.send("saving");
};
exports.deleteProduct=(req, res, next) => {
    res.send("deleted");
};