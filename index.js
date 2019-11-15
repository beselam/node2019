'use strict'
const express = require('express');
const connection = require('./model/db.js');
const app = express();

  app.get('/animal', async (req,res)=>{
      try{
    const [results, fields] = await connection.query(
          'SELECT * FROM animal');
         
              console.log(results);
              console.log(fields);
              res.json(results);
              
    } catch (e){
        console.log(e);
        res.send('db error');
        
    }
      
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

