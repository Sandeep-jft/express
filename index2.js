const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const templatePath = path.join(__dirname, 'public');

// app.use(express.static(templatePath));
app.set('view engine', 'ejs');

app.get('/', function(_, res) {
    const user = {
        name:"Sandeep",
        email:"Sandeep.singh@jft.com",
        skills:['react','react native', 'express']
    }
    res.render('home',{user});
});

app.get('/login',(_,res)=>{
    res.render('login');
})

app.get('*',(_,res)=>{
    res.sendFile(`${templatePath}/404.html`);
})

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`)
})