const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("HI");

});
server.listen(3000,()=>{
    console.log('port 3000');
})