const express = require('express');
const path = require('path');
const productRoute = require('./routes/product');
const app = express();



app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productRoute);


app.listen(8080, err => {
    if (err) throw err;
    console.log('server running');
});