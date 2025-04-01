// Returning html pages

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    const filePath = path.join('views/index.html');
    const filePath2 = path.join('views/about.html');
    const filePath3 = path.join('views/admin.html');
    const filePath4 = path.join('views/404.html');

    if( req.url === '/'){     
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {            
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Error loading the HTML file.");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });

    }else if( req.url === '/about'){   
        fs.readFile(filePath2, 'utf8', (err, data) => {
            if (err) {            
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading the HTML file.");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });

    }else if( req.url === '/admin'){   
        fs.readFile(filePath3, 'utf8', (err, data) => {
            if (err) {            
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading the HTML file.");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }else {
        fs.readFile(filePath4, 'utf8', (err, data) => {
            if (err) {            
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading the HTML file.");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });

    }


});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});