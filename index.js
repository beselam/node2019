'use strict'

const express = require('express');
const app = express();
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

