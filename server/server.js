import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import con from './db.js';

dotenv.config();

//console.log('server say hi');
var express =require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors');

app.use(cors());

var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});

// var con = mysql.createConnection({
//     host : 'localhost',
//     user: 'root',
//     password: '',
//     database:'bookdb'
// });

con.connect((err)=>{
    if(err) throw err;
    console.log('DB Connected')
})

//login
app.post("/login",jsonParser,function(req,res){

    let uname = req.body.uname;
    let password = req.body.password;

    if(uname===undefined||password===undefined){
        res.status(500).send({error:"Authentication Failed"});
    }

    let qry = `select dpname from users where uname='${uname}' and password= sha1('${password}')`;
    con.query(qry,(err,result)=>{
        if(err||result.length==0){
            res.status(500).send({error:'Login Failed'})
        }else{
             res.status(200).send({error:'Login Success'})

             let resp ={
                id:result[0].id,
                dpname:result[0].dpname
             }
             let token = jwt.sign(resp,"123",{expiresIn:86400});
             res.status(200).send({auth:true,token:token});
        }
    })
});

//get books
app.get("/books",function(req,res){
    con.query("select * from mybooks",(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
        console.log(result);
    })
});

//get users
app.get("/users",function(req,res){
    con.query("select * from users",(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
        console.log(result);
    })
});

//get a single book
app.get("/books/:id",function(req,res){
    let id = req.params.id;
     con.query("select * from mybooks where id="+id,(err,result,fields)=>{
        if(err) throw err;
         res.send(result);
        //console.log(result);
    })
});

//add new book
app.post("/addbook",jsonParser,function(req,res){

    let name = req.body.name;
    let auther = req.body.auther;
    let price = req.body.price;
    let description = req.body.description;

    let qry = `insert into mybooks(name,auther,price,description) values('${name}','${auther}',${price},'${description}')`;
    con.query(qry,(err,result)=>{
        if(err){
            res.send({error:'Operation failed'});
             //res.send({qry});
            }
            else{
                res.send({Success:'Operation Success'});
            }
        
        })
    
});

//update book
app.patch("/updatebook",jsonParser,function(req,res){
    let name = req.body.name;
    let auther = req.body.auther;
    let price = req.body.price;
    let description = req.body.description;
    let id = req.body.id;
    
    let qry = `update mybooks set name ='${name}', auther ='${auther}', price =${price}, description ='${description}' where id =${id}`;

    con.query(qry,(err,result)=>{
        if(err){
            res.send({error:'Operation failed'});
            }
            else{
                res.send({Success:'Operation Success'});
            }
        
        })

});

//delete book
app.delete("/deletebook/:id",function(req,res){
    let id = req.params.id;

    let qry = `delete from mybooks where id=${id}`;

    con.query(qry,(err,result)=>{
        if(err){
            res.send({error:'Operation failed'});
            }
            else{
                res.send({Success:'Operation Success'});
            }
        
        })
});

//add new user
// app.post("/adduser",jsonParser,function(req,res){

//     let name = req.body.name;
//     let gender = req.body.gender;
//     let address = req.body.address;
//     let phone = req.body.phone;
//     let role = req.body.role;

//     let uname = req.body.uname;
//     let password = req.body.password;

//     let qry = `insert into users(name,gender,address,phone,role) values('${name}','${gender}','${address}',${phone},'${role}')`;
//     con.query(qry,(err,result)=>{
//         if(err){
//             res.send({error:'Operation failed'});
//              //res.send({qry});
//             }
//             else{
//                 res.send({Success:'Operation Success'});
//             }
        
//         })

//     let qry1 = `insert into login(name,uname,password,role) values('${name}','${uname}',sha1('${password}'),'${role}')`;
//     con.query(qry1,(err,result)=>{
//         if(err){
//             res.send({error:'Operation failed'});
//              //res.send({qry});
//             }
//             else{
//                 res.send({Success:'Operation Success'});
//             }
        
//         })
    
// });

app.post("/adduser", jsonParser, function (req, res) {
    const { name, gender, address, phone, role, uname, password } = req.body;

    let qry = `INSERT INTO users(name, gender, address, phone, role) VALUES (?, ?, ?, ?, ?)`;
    con.query(qry, [name, gender, address, phone, role], (err, result1) => {
        if (err) {
            console.error("Error inserting into users:", err);
            return res.status(500).send({ error: 'User insert failed' });
        }

        let qry1 = `INSERT INTO login(name, uname, password, role) VALUES (?, ?, sha1(?), ?)`;
        con.query(qry1, [name, uname, password, role], (err, result2) => {
            if (err) {
                console.error("Error inserting into login:", err);
                return res.status(500).send({ error: 'Login insert failed' });
            }

            return res.send({ success: 'Operation Success' });
        });
    });
});



app.listen(9000,function(){
    console.log('server started')
});