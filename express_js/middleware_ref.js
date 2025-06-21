//  Middleware in Express.js is a function that runs between the request coming from the client and the response being sent by the server.
//  In express.js, middleware is implemented as follows: app.use(function);
//  E.g:
//  app.use(express.json());  // Parses JSON request bodies
//  app.use(express.urlencoded({ extended: true }));  // Parses form data
//  app.use(express.static('public'));  // Serves static files

//  CHECK: app.js in ejs_view_engine_ref as well on usage.

// NB: There are third party middleware packages. E.g: hemet, passport, CORS, morgan,




const express = require('express');
const cors = require('cors');                 // CORS middleware middleware package
const morgan = require('morgan');
const app = express();

app.use(cors());        // CORS middleware middleware package
app.use(morgan('dev')); // Logs requests to the console

// This will execute for every request
app.use((req, res, next) => {
    console.log(`New request made`);
    console.log(`host: ${req.host}`);
    console.log(`path: ${req.path}`);
    console.log(`Method: ${req.method}`);
    next();
});

app.use((req, res, next) => {
    console.log("Second middleware");
    next();
});

// Middleware 3 - Runs **after** response is sent
// app.use((req, res, next) => {
//     res.on('finish', () => {
//         console.log("Final Middleware: Response sent to client");
//     });
//     next();
// });


app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {                    // 'finish' is called after middleware is finished
        const duration = Date.now() - start;
        console.log(`Request to ${req.path} took ${duration}ms`);
    });
    next();
});

app.get('/', (req, res) => {
    res.send('Hello Ibrahim! You are running');
}
);



app.listen(3003, '127.0.0.1', () => {
    console.log('Listening on  127.0.0.1:3003');

}
);