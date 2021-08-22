const http = require('http');

const server =http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('welcome to our homepage')
    }
    if(req.url ==='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h2>oop!</h2>
    <p>page not found</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000);