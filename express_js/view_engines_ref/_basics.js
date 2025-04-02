// npm install ejs --

const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', __dirname + '/views');
// Set the static files directory
app.use(express.static(__dirname + '/public'));
// Set the body parser middleware
app.use(express.urlencoded({ extended: true }));
// Set the cookie parser middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Ibrahim! You are running');
    }
);

app.listen(3002, '127.0.0.1', () => {
    console.log('Listening on  127.0.0.1:3002');
    }
);
