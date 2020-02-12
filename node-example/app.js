const http = require('http');
const os = require('os');

console.log("server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("VERZIJA 44444444444 test-poc You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
