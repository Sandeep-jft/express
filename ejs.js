const express = require('express');

const app = express();
const PORT = 8080;

const customMiddleware = (req,res,next)=>{
    console.log("Middleware is running -->");
    if(req.query.name){
        next();
    }
    res.send("Please provide name")
}

app.use(customMiddleware);  //app.use takes middleware function only

app.get('/',(_,res)=>{
    res.json({message:"Hello"})
})

app.get('/about',(_,res)=>{
    res.send("Hello this is about page");
})

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`)
})