// Import the built-in 'http' module to create an HTTP server
const http = require("http");

// Create the server and define how it should handle requests
const server = http.createServer((req, res) => {

    // Check if the request is a POST request to the '/data' endpoint
    if (req.method === "POST" && req.url === "/data") {
        let body = ""; // Variable to store incoming request data

        // Listen for incoming data chunks
        req.on("data", (chunk) => {
            body += chunk.toString(); // Convert Buffer (binary data) to string
        });

        // When the request data is fully received
        req.on("end", () => {
            try {
                // Parse the received JSON data
                const parsedData = JSON.parse(body);

                // Send a success response with the parsed JSON data
                res.writeHead(200, { "Content-Type": "application/json" }); // Set response status & headers
                res.end(JSON.stringify({ message: "Data received", data: parsedData })); // Send response
            } catch (error) {
                // If JSON parsing fails, send a 400 Bad Request response
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    } 
    else {
        // Handle any other request (routes that are not '/data')
        res.writeHead(404, { "Content-Type": "text/plain" }); // Set response status & headers
        res.end("Not Found"); // Send a 'Not Found' message
    }
});

// Start the server on port 3000 and log a message when it's ready
server.listen(3002,  '127.0.0.1', () => {
    console.log("Server running on http://localhost:3002/");
});


/* TEST
curl -X POST http://localhost:3002/data -H "Content-Type: application/json" -d "{\"name\": \"John\", \"age\": 30}"
*/