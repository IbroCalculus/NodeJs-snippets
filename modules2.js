/*
This is examples of some common modules: ie path, File system and http module

============= 1. Path Module =============
The path module is a built-in utility module that provides methods for working with file and directory paths.

const path =  require('path');

const fullPath = path.join('/home', 'user', 'docs', 'file.txt');
console.log(`FULLPATH: ${fullPath}`);   // OUTPUT: FULLPATH: \home\user\docs\file.txt

const absolutePath = path.resolve('src', 'app.js');
console.log(absolutePath); // Output: /current/working/directory/src/app.js

const filename = path.basename('/home/user/docs/file.txt');
console.log(filename); // Output: file.txt

const filenameWithoutExt = path.basename('/home/user/docs/file.txt', '.txt');
console.log(filenameWithoutExt); // Output: file

const dirname = path.dirname('/home/user/docs/file.txt');
console.log(dirname); // Output: /home/user/docs


============= 2. File System Module =============
The File System (fs) module in Node.js is a built-in module that provides an API for interacting with the file system on your computer. 
It allows you to perform operations like reading files, writing files, creating directories, deleting files, and more. 
The fs module is essential for any Node.js application that needs to work with files or directories.
The fs module provides both synchronous (blocking) and asynchronous (non-blocking) versions of its methods.

const fs = require('fs');

// Synchronous read file
try {
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log('File content:', data);
} catch (err) {
    console.error('Error reading file:', err);
}

// Asynchronous read file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


============= 3. HTTP Module =============
The HTTP module in Node.js is a built-in module that allows you to create HTTP servers and make HTTP requests. 
It is the foundation for building web servers, APIs, and interacting with other web services. 
With the http module, you can handle incoming HTTP requests and send responses, making it a core part of web development in Node.js.

CHECk: http_module_ref.js for more information

------------- Create a simple HTTP server -------------
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code (200 = OK)
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});


 */