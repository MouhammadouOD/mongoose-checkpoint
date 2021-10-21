let mongoose = require('mongoose');
const server = 'localhost:27017';
const database = 'mongoosetest';

class Database{
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose.connect()
    }
}