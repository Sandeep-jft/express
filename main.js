const express = require('express');
const connectDB = require('./utils/mongooseDB');
const User = require('./models/User');
const Product = require('./models/Product');

const PORT = process.env.PORT || 8080;
const app = express();


app.get('/', async (req,res)=>{
    try{
        const newUser = new User({
            name:"Sandeep Singh",
            age:24,
            email:"San@user.com"
        })
    
        const user = await newUser.save();
        console.log("user is -->", user);
        return res.json({user})
    } catch(e){
        console.log("Error --", e);
        return res.json({error:e})
    }
});

app.get('/product', async (req,res)=>{
    try{
        const newProduct = new Product({
            name:"Samsung s22",
            brand:"Samsung",
            category:"mobile"
        })
    
        const product = await newProduct.save();
        console.log("product is -->", product);
        return res.json({product})
    } catch(e){
        console.log("Error --", e);
        return res.json({error:e})
    }
});


app.get('/search/:key',async (req,res)=>{
    const {key} = req.params;
    const result = await Product.find({
        '$or':[
            {
                "name":{ $regex: key }
            },
            {
                "category":{ $regex: key }
            }
        ]
    })
    return res.json(result)
})

const bootstrap = async ()=>{
    await connectDB();
    app.listen(PORT,()=>{
        console.warn(`App is running on http://localhost:${PORT}`)
    });
}

bootstrap();
