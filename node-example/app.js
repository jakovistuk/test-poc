const http = require('http');
const os = require('os');

console.log("server starting...");

var handler = function(request, response) {
  var datetime = new Date();
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("VERZIJA 55555555555 test-poc You've hit " + os.hostname() + "\n"+datetime);
};

var www = http.createServer(handler);
www.listen(8080);
