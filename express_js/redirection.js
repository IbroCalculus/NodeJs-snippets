const express = require('express');
const app = express();

app.get('/old-route', (req, res) => {
    res.redirect('/new-route');
});

app.get('/new-route', (req, res) => {
    res.send('You have been redirected to the new route.');
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on port 3000');
});
