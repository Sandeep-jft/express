const express = require('express');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads');
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+'_'+Date.now()+'.png')
        }
    })
}).single('user_file');

app.post('/upload',upload, (_,res)=>{
    try{
        return res.send("File uploaded")
    }catch(e){
        return res.send("error", e)
    }
})

app.listen(PORT,()=>{
    console.warn(`App is running on http://localhost:${PORT}`)
});