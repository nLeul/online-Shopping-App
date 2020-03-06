const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productRoute = require('./routes/product');
const Product = require('./model/product');
const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productRoute);


app.listen(8000, err => {
    if (err) throw err;
    console.log('server running');
    Product.init();
});