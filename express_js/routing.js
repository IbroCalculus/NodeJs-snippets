const express = require('express');
const path = require('path');

// Create an Express application
const app = express();


    
const filePath = path.join(__dirname, 'views', 'index.html');
const filePath2 = path.join(__dirname, 'views', 'about.html');
const filePath3 = path.join(__dirname, 'views', 'admin.html');
const filePath4 = path.join(__dirname, 'views', '404.html');



// Route for the home page ("/")
app.get('/', (req, res) => {
    res.sendFile(filePath);
});

// Route for the "/about" page
app.get('/about', (req, res) => {
    res.sendFile(filePath2);
});

// Route for the "/admin" page
app.get('/admin', (req, res) => {
    res.sendFile(filePath3);
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).sendFile(filePath4);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});