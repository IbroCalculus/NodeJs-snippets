const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/old-page" && req.method === "GET") {
        res.setHeader("Location", "/new-page"); // Set the redirect location
        res.statusCode = 301; // 301 for permanent redirect
        res.end();
    } else if (req.url === "/new-page") {
        res.setHeader("Content-Type", "text/plain");
        res.end("You've been redirected to the new page!");
    } else {
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 404;
        res.end("Page not found");
    }
});


server.listen(3001, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3001/');
});