// JavaScript Document

var http = require("http");
var url = require("url");
var i=0;

function start(route,handle)
{
	
	function on_request(request, response) 
	{
			i++;
			console.log('Request recieved :'+i);
			
		  var pathname = url.parse(request.url).pathname;
		  
		  console.log("Request for " + pathname + " received.");


		var postData = "";		 	
		request.setEncoding("utf8");
		request.addListener("data", function(postDataChunk) {
		postData += postDataChunk;
		console.log("Received POST data chunk '"+
		postDataChunk + "'.");
		});
		request.addListener("end", function() {
		route(handle, pathname, response, postData);
		});
/*
		 var content = route(handle,pathname,response);
		  
		  response.writeHead(200, {"Content-Type": "text/plain"});
		  response.write("Hello World123");
		  response.write(content);
		  response.end();
*/
	}
	
	http.createServer(on_request).listen(8888);
	console.log('Server had started');
		
}

exports.start = start;