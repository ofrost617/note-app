// snippet to be incorporated in order to launch server within the code


var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "./src");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
