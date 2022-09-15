const express = require('express');
const connectDB = require('./utils/dbconnect');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false,limit:5000}));
// app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.get('/',async (req,res)=>{
    const db = await connectDB();
    const data = await db.find({}).toArray();
    return res.send(data);
})

app.post('/product',async(req,res)=>{
    try{
    const { name, brand, category } = req.body;
    const db = await connectDB();
    const data = await db.findOne({name});
    if(!data){
        const product = await db.insertOne({name,brand,category});
        if(product.acknowledged){
            return res.send({message:"product created successfully"});
        }
        throw product;
    }
    return res.send('Please enter different product name');
    } catch(e){
        console.error("Error ", e);
        return res.send({error: e})

    }
})

app.put('/product/:productName',async(req,res)=>{
    try{
        const {name, brand, category } = req.body;
        const {productName} = req.params;
        console.log('the product is ', req.params.productName);
        const db = await connectDB();
        const data = await db.findOne({name: productName});
        console.log('data ', data)
        if(data){
            const product = await db.updateOne({name:productName}, {
                $set:{name,brand,category}
            });
            if(product.acknowledged){
                return res.send({message:"product updated successfully"});
            }
            throw product;
        }
        return res.send('Please enter different product name');

    } catch(e){
        console.error("Error ", e);
        return res.send({error: e})
    }
})

//new mongoDB.objectId(productId);
app.delete('/product/:productName',async (req,res)=>{
    try{
        const {productName} = req.params;
        const db = await connectDB();
        const data = await db.findOne({name: productName});
        if(data){
            const product = await db.deleteOne({name:productName});
            if(product.acknowledged){
                return res.send({message:"product deleted successfully"});
            }
            throw product;
        }
        return res.send('Please enter different product name');

    } catch(e){
        console.error("Error ", e);
        return res.send({error: e})
    }
})

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`)
})