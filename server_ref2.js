const http = require('http');
const index = require('./index')


const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code (200 = OK)
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});