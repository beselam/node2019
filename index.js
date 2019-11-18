'use strict'

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const animal= require('./model/animal.js');

app.use(express.static('public'));
app.listen(30000);

app.get('/animals', async (req, res) => {
  try {
    res.json(await animal.getAll());
  } catch (e) {
    console.log(e);
    res.send('db error :(');
  }
});

app.get('/animal', async (req, res) => {
  console.log(req.query);
  try {
    res.json(await animal.search(req.query.name));
  } catch(e) {
    res.send(`db error`);
  }
});

 /* app.post('/animal', async (req , res) => {
    console.log(req.body);
    res.send('will do asap');
    
  }) */

  
  app.post('/animal', bodyparser.urlencoded({extended: true}), async (req, res) => {
    console.log(req.body);
    try {
      res.json(await animal.insert(req.body.name));
    } catch (e) {
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


