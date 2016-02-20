var http = require('http');

var server = http.createServer(function(request, response) {
	response.end("<h1>Hello</h1>");
});

var port = Number(process.env.PORT || 3000)

server.listen(port);