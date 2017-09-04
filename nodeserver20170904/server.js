var http = require("http");

http.createServer(function(request, response) {
	console.log("Server has started.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8090);

console.log("Server has started.");

// 注意：在 onRequest （我们的回调函数）触发的地方，我用 console.log 输出了一段文本。在 HTTP
// 服务器开始工作之后，也输出一段文本。
// 当我们与往常一样，运行它 node server.js时，它会马上在命令行上输出“ Server has started.”。当我
// 们向服务器发出请求（在浏览器访问 hp://localhost:8888/），“ Request received.”这条消息就会在
// 命令行中出现。
// 这就是事件驱动的异步服务器端 JavaScript 和它的回调啦！
// （请注意，当我们在服务器访问网页时，我们的服务器可能会输出两次“ Request received.”。那是
// 因为大部分服务器都会在你访问 hp://localhost:8888 /时尝试读取 hp://localhost:8888/favicon.ico )


