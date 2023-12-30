const http =require('http');

const server = http.createServer((req,res)=>{

    console.log(req.url,req.method);
    res.write('<h1>Muzammil</h1>');
    res.end();
})

server.listen(4000);