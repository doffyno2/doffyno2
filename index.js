const http = require("http");
const server = require("./api/server");
http.createServer((req,res)=>{
	server(req,res);
}).listen(80);