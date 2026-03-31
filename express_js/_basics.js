// npm i express

const express = require('express');
const app = express();
const IP = "127.0.0.1";
const PORT = 3001;


// Middleware to parse JSON bodies (For post requests)
app.use(express.json());


// ====================== RETURNING STRING RESPONSE =============
app.get('/', (req, res) => {
    res.send('Hello Ibrahim! You are running');
    }
);

// ====================== RETURNING JSON RESPONSE ===========
const jsonData = {
  name: "Ibrahim",
  age: 25,
  city: "Cairo",
  occupation: "Software Engineer",
};

app.get("/get_json", (req, res) => {
  res.json(jsonData);
});

app.listen(PORT, IP, () => {
    console.log(`Listening on  ${IP}:${PORT}`);
    }
);

// ====================== JSON POST REQUEST ===========
app.post('/api/user', (req, res) => {
  // Access the data sent by the user via req.body
  const receivedData = req.body;
  
  console.log("Data received:", receivedData);

  // Send a response back confirming receipt
  res.json({
    message: "User created successfully",
    user: receivedData
  });
});

// Run same way. ie node _basics or nodemon _basics