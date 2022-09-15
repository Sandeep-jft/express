const {MongoClient} = require('mongodb');

require('dotenv').config();

const DB_URL = process.env.MONGO_URI;
const DB_NAME = process.env.DATABASE_NAME;

const client = new MongoClient(DB_URL);

async function connectDB(){
    try{
        const res = await client.connect();
        const db = res.db(DB_NAME);
        return db.collection('products');
    }
    catch (error) {
        return error;
    }
}

module.exports = connectDB;