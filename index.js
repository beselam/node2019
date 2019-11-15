'use strict'
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME


});
  app.get('/animal',(req,res)=>{
      connection.query(
          'SELECT * FROM animal',
          (err , results, fields) => {
              console.log(results);
              console.log(fields);
              res.json(results);
              
          }
      );
  });


/* app.get('/',(req,res)=>{
	console.log("app");
 res.send('hellow from my node server');
});
 app.get('/demo',(req,res)=>{
	console.log("demo app");
    res.send('demo');
   }); 
 */
app.use(express.static('public'));
app.listen(30000);

