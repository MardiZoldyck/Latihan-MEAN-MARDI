const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
    if (err){
        console.log('tidak bisa konek ke database :', err);
    }else{
        console.log(config.secret);
        console.log('bisa konek ke database:' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist'));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8000, ()=>{
    console.log('Listening on port 8000');
});