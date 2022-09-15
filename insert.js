const connectDB = require('./utils/dbconnect');

const insertDB = async ()=>{
    const db = await connectDB();
    const product = await db.findOne({name:"oppo s21"})
    if(!product){
        const insert = await db.insert([{name:'oppo s21', brand:'Oppo', category:'mobile'}, 
        {name:'oppo m22', brand:'Oppo', category:'mobile'},
        {name:'oppo j3', brand:'Oppo', category:'mobile'}]);
    }
}

module.exports = insertDB;