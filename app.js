const express =require('express');
const path=require('path');
const mysql=require('mysql');
const bParser=require('body-parser');


const app=express();

app.set('view engine','hbs');

app.use(bParser.urlencoded({ extended:false}));
app.use(bParser.json());

// console.log(__dirname);
const pubdir=path.join(__dirname,'./public');
app.use(express.static(pubdir));
// app.send("hello");
app.use('/',require('./routes/homepage'));
app.use('/auth',require('./routes/auth'));
// app.use('/auth/login',require('./routes/auth'));



app.listen(8080,(err)=>{
    if(err){
        console.log(err);
    }
    else 
    console.log('server running on port 8080...')
});