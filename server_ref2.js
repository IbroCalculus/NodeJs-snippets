const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code (200 = OK)
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
    // console.log(req.headers); // Log the headers of the incoming request
    // console.log(req); // Log the entire request object
    console.log(req.url); // Log the URL of the incoming request
    // console.log(res); // Log the entire response object
    
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});