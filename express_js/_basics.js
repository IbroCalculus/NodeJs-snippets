// npm i express

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Ibrahim! You are running');
    }
);

app.listen(3002, '127.0.0.1', () => {
    console.log('Listening on  127.0.0.1:3002');
    }
);

// Run same way. ie node _basics or nodemon _basics