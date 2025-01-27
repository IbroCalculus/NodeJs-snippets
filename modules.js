/*
Consider modules to be the same as JavaScript libraries. They are sets of functions you want to include in your application
To include a module, use the require() function with the name of the module:


======== 1. Including Built-in Modules ===========
NB: The http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

var http = require('http');             // Now your application has access to the HTTP module, and is able to create a server:

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});


======== 2. Create Your Own Modules (CHECK 2b below to see a second method of exporting) ===========
You can create your own modules, and easily include them in your applications. The following example creates a module that returns a date and time object:

// createDateModule.js
exports.myDateTime = function () {          // The exports keyword makes properties and methods available outside the module file.
  return Date();
}

// ----- Include the module in any file -----
// index.js
var http = require('http');
var dt = require('./createDateModule');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('The server time is:'+ dt.myDateTime() + '\n');
});

server.listen(8080, "localhost");

NB: Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.


================ 2b. Create Your Own Modules (Another method of exporting) ===========

// calculator.js

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

    
module.exports = {
    add,
    subtract,
    multiply
};

// ----- Include the module in any file (ie index.js) -----

var calc = require('./calculator');

console.log(calc.add(2, 3)); // Outputs: 5
console.log(calc.subtract(5, 2)); // Outputs: 3
console.log(calc.multiply(3, 2)); // Outputs: 6




 */