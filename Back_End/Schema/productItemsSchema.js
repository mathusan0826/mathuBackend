const mongoose = require('mongoose');

const productItemsSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Discription : {
        type : String,
        required : true
    },
    Categories : {
        type : String,
        required : true
    },
    

});

var addproduct = mongoose.model('addproduct',productItemsSchema);
module.exports  = addproduct;