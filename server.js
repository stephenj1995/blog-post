var http = require('http');

var server = http.creatServer(function(req,res){
	cosole.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hey');
});

server.listen(3000, '127.0.0.1');
cosole.log('yo dawgs,now listening to port 3000')