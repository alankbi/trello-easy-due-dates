var http = require('http');
var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        
        response.end('received POST request.');
    }
});

server.listen(8000);