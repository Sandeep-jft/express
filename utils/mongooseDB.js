const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URL; //process.env.MONGO_URI;
const DB_NAME = process.env.DATABASE_NAME;

const connectDB = async ()=>{
    if(mongoose.connection.readyState === 0){
        mongoose.connect(MONGO_URI,{
            // dbName:DB_NAME,
        }).then(res=>{
            console.log("Mongoose connected -->");
        }).catch(error=>{
            console.error("Mongoose connection error -->", error);
        })
    }

}

module.exports = connectDB;