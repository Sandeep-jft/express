const {models, model, Schema} = require('mongoose');

const productSchema = new Schema({
    name:{
        type:String,
        unique:true
    },
    category:{
        type:String,
    },
    brand:{
        type:String
    }
},{
    timestamps:true
})


const Product = models.Product || model('Product', productSchema);

module.exports = Product;