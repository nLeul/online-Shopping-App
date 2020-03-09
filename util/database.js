const MongoClient = require('mongodb').MongoClient;

let _db;


const url = 'mongodb://localhost:27017';


const mongoConnect = function (callback) {
    MongoClient.connect(url, { useUnifiedTopology: true })
        .then(client => {
            _db = client.db('onlineShopping')
            callback();
        })
        .catch(err => {
            console.log(err);
            throw new Error('DB  connection failed...');
        });
};
const getDB = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('DB connection failed');
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;