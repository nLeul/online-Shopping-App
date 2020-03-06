let cart = null;

module.exports = class Cart {

    static save(product) {
        if (cart === null) {   
            cart = { products: [], totalPrice: 0 };
        }
        const existingProdIndex = cart.products.findIndex(p => p.id == product.id);//to check if products exist
        // console.log(existingProdIndex);
        if (existingProdIndex >= 0) {//if exists in cart allready
            const existingProduct = cart.products[existingProdIndex];
            existingProduct.qty += 1;

        }
        else {//if its not in cart already
            product.qty = 1;
            cart.products.push(product);
        }
        cart.totalPrice += product.price;

    }


    static getCart() {
        return cart;
    }
    static deleteCart(productId) {
        const products = cart.products;
        const isExisting = products.findIndex(p => p.id == productId);
        if (isExisting >=0) {
            products.splice(isExisting, 1);
        }
        // console.log(cart);

    }
}
