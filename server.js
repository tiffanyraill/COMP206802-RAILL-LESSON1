/** Created by T.Raill on 1/11/2017. ...*/

//First node page to load in a browser

//reference the http library that ships with node
var http = require('http');

// start an http server asynchronously
http.createServer(function (request, response) {
    //send a response
    response.writeHead(200); //200 is the response code (means ack)
    response.write('<h1>Our First node page</h1>'); //make it bold with h1 header
    response.end(); //end it or it will run (load page) forever
}) .listen(3000); 

//display a message to the consle
console.log('Server running on port 3000');
