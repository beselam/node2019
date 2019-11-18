'use strict'
const express = require('express');
const connection = require('./model/db.js');
const app = express();
const bodyparcer = require('body-parser');

app.use(express.static('public'));
app.listen(30000);

  app.get('/animals', async (req,res)=>{
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

  app.get('/animal' , async (req,res) => {
  console.log(req.query);
  //res.send(`qoer ${req.query}`);
  try {
    const [results] = await connection.query(
      'SELECT * FROM animal WHERE name LIKE ?',
      [req.query.name]);
      res.json(results);

    } catch(e) {
      res.send(`de error ${e}`);
    }

  });

 /* app.post('/animal', async (req , res) => {
    console.log(req.body);
    res.send('will do asap');
    
  }) */

  
  app.post('/animal', bodyparcer.urlencoded({extended: true}), async (req , res) => {
    console.log(req.body);
   try{
    const [results] = await connection.query(
    'INSERT INTO animal (name) VALUES (?)',
    [req.body.name]
    );
    res.json(results);
   } catch (e){
     console.log(e);
     res.send('db error');
     
   }
    
  })

/* app.get('/',(req,res)=>{
	console.log("app");
 res.send('hellow from my node server');
});
 app.get('/demo',(req,res)=>{
	console.log("demo app");
    res.send('demo');
   }); 
 */


