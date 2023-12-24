
var http= require ("http")
http.createServer(function(req,res){
res.writeHeader(200,{'content-Type':'text/plain'});
res.end("hi");
})
.listen(3000);
console.log("server started");