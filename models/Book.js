const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:String,
    auther:String,
    publishCity:String
});

module.exports = mongoose.model('Book',schema)