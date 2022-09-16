const {models, model, Schema} = require('mongoose');

const userSchema = new Schema({
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String,
    },
    age:{
        type:Number
    }
},{
    timestamps:true
})


const User = models.User || model('User', userSchema);

module.exports = User;