const mysql =require('mysql');
const express=require('express');
const app=express();

var id=1000;
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs-login'
});

exports.register=(req,res)=>{
    const {name,email,password} = req.body;
    // console.log();
    db.query('select email from user where email=?',[email],async(error,results)=>{
        if(error)
        console.log(error);
        else if(results.length > 0){
            return res.render('register',{
                message:'user has already been registered.'
            });
        }
        else if(name!='' && email!='' && password!=''){
            db.query('insert into user set ?',{name:name,email:email,password:password},(error,results)=>{
                if(error)
                    console.log(error);
                else
                res.send(`Dear ${name} , you have been succesfully registered`);
            });
            
            
        }
        else{
            return res.render('register',{
                message:'please enter valid information.'
            });
        }
        
    });
};
exports.login=(req,res)=>{
    const {email,password}=req.body;
    // console.log(req.body);
    db.query('select email from user where email=?',[email],async(error,result)=>{
        // console.log(email);
        if(result.length==0){
            res.render('login',{
                messsage:'please register'
            });
            // console.log("lerjnirn");
        }
        else{
            db.query('select name,password from user where email=?',[email],(err,re)=>{
                if(re[0].password!=password){
                    res.render('login',{
                        message:'please enter correct password'
                    });
                }
                else{
                    // app
                    // res.send('successfully logged in...');
                    res.render('calorie');
                    
                }
            });
        }
    });
};

