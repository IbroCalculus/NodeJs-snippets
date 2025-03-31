/*

======= 1. Creating an HTTP Server =========

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code (200 = OK)
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');

    // console.log(req); // Log the entire request object
    // console.log(req.headers); // Log the headers of the incoming request
    // console.log(req.url); // Log the URL of the incoming request
    // console.log(res); // Log the entire response object

    
    // process.exit();
    // This will terminate the server immediately after responding to the first request. In a real-world scenario, you might want to handle this more gracefully.

});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
 */


/*
======= 2. Handling Different Routes =========
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Home Page\n');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found\n');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

 */
