const express = require('express');
const EventEmitter = require('events');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const event = new EventEmitter();
let count = 0;

event.on('api-call',()=>{
    count++;
    console.log("Api called ", count);
})

app.get('/',(_,res)=>{
    event.emit('api-call')
    res.send('home');
})

app.get('/search',(_,res)=>{
    event.emit('api-call');
    res.send('search');
})

app.listen(PORT,()=>{
    console.warn(`App is running on http://localhost:${PORT}`)
})