const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productRoute = require('./routes/product');
const Product = require('./model/product');
const mongoConnect = require('./util/database').mongoConnect;
const moongoose = require('mongoose');
const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productRoute);


moongoose.connect('mongodb://localhost:27017/onlineShopping')
    .then(() => {
        app.listen(8000, err => {
            if (err) throw err;
            console.log('server running');
     
        });
    });


