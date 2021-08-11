var http = require('http');

//Here we create a server
var server = http.createServer(function(req,res){
    res.write('<h1>Welcome to new server</h1>');        //to receive the response
    res.end();                                          //to end the response
});

//Here we ask the server to run in the following port number and the port number can be any random 4 digit
server.listen(9000)