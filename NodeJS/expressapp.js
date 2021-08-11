var express = require('express');
var app = express();
var port = 2000;


const city = [
    {
        "_id":1,
	    "city_name":"Delhi",
        "city":1,
        "country_name" :"India"
    },
    {
        "_id": 2,
        "city_name":"Mumbai",
        "city": 2,
        "country_name":"India"
    },
    {
        "_id": 3,
        "city_name":"Pune",
        "city": 3,
        "country_name":"India"
    },
    {
        "_id": 4,
        "city_name":"Bangalore",
        "city": 4,
        "country_name":"India"
    },
    {
        "_id": 5,
	    "city_name":"Chandigarh",
        "city": 5,
        "country_name": "India"
    }
]

app.get('/city/:id',(req,res) => {
    console.log(req.params.id)
    var areacode = req.params.id; 
    res.send(city.areacode);
})

app.get('/',(req,res) => {
    res.send(city)
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})