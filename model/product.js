let products = [];

class Products{
    constructor(id, name, type, price, imageURL, description) {
        
        this.id = id;
        this.name = name;
        this.type = type;
        this.price=price;
        this.imageURL = imageURL;
        this.description = description;
        
    }

    save() {
        this.id = Math.floor(Math.random() * 100000).toString();
        products.push(this);
    }

    static getAllProducts() {
        return products; 
    }
    static deleteProducts(prodId) {
       return products.find(prod => {prod.id == prodId});
    }
}

module.exports = Products;