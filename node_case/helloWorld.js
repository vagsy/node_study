var http = require('http');
var server = http.createServer(function (req, res) {
	console.log('Server has started.');
	res.writeHead(200);
	res.end('Hello world!!!');
});
server.listen(80);