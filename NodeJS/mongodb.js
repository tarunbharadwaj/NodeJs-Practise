const express = require('express');
const app = express();
const port = 7800;
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient           //this helps us to connect with mongodb
const mongourl = "mongodb://localhost:27017";
const cors = require('cors');
var datab;                                      //this is a varibale name for adding a name to database

app.use(cors());

//use of query parameter
app.get('/city',(req,res) => {
    var query = {}
    if(req.query.city){
        query = {city:req.query.city}
    }else{
        query = {}
    }
    datab.collection('city').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    })
})


//to get the data from the mongodb local server
app.get('/city',(req,res) => {
    datab.collection('city').find({}).toArray((err,result) => {             //toArray is for getting the response in array
        if(err) throw err;
        res.send(result);
    })
})


//here we start running the mongodb
MongoClient.connect(mongourl, (err,connection) => {
    if(err) throw err;
    datab = connection.db('database_name');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`The server is running at port ${port}`)
    })
})


