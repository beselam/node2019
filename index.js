'use strict'

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
 res.send('hellow from my node server');
});
app.get('/demo',(req,res)=>{
    res.send('demo');
   });

app.listen(30000);

