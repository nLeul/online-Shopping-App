let products = [];

class Products {
    constructor(id, name, type, price, imageURL, description) {

        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
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
    static deleteProduct(prodId) {
        const indexOfProduct = products.findIndex(prod => prod.id == prodId);
        return products.splice(indexOfProduct, 1);
    }
    static findProdById(prodId) {
        return products.find(produ => produ.id == prodId);
    }
    update() {
        const indexOfProduct = products.findIndex(prod => prod.id == this.id);
        products[indexOfProduct] = this;
    }
    static init() {
        products.push(new Products(12346, 'ReactJS', 'Book', 45,'https://images-na.ssl-images-amazon.com/images/I/41savsjyZCL._SX404_BO1,204,203,200_.jpg','React text Book'));
        products.push(new Products(12342, 'AngularJS', 'Book', 55,'https://images-na.ssl-images-amazon.com/images/I/51UM87TQCtL._SX384_BO1,204,203,200_.jpg','React text Book'));
        products.push(new Products(12349, 'Bootstrap', 'Book', 65,'https://images-na.ssl-images-amazon.com/images/I/51UNGbXYZhL._SX382_BO1,204,203,200_.jpg','React text Book'));
        products.push(new Products(12344, 'TypeScript', 'Book', 25,'https://images-na.ssl-images-amazon.com/images/I/51N6%2BrxBKsL._SX404_BO1,204,203,200_.jpg','React text Book'));
        products.push(new Products(12045, 'Javascript', 'Book', 30,'https://img.thriftbooks.com/api/images/l/6228877e993f091a62a22d909b279abb4838cfdb.jpg','React text Book'));
        products.push(new Products(12145, 'Java', 'Book', 34,'https://images-na.ssl-images-amazon.com/images/I/51qgq1swZ4L._SX395_BO1,204,203,200_.jpg','React text Book'));
    }
}


module.exports = Products;