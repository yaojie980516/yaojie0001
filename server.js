var http = require("http");
var url = require("url");
function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recived.");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello word!");
    response.end();
}
http.createServer(onRequest).listen(80);
console.log("Server has started!");
