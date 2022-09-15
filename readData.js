const connect = require('./utils/dbconnect');

const read = async ()=>{
    const db = await connect();
    const result = await db.find({}).toArray();
    console.log("the result is -->", result);
}

module.exports = read;