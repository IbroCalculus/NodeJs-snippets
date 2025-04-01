// Similarly, streams_ref.js


fs = require('fs');

// ========== 1. WRITING TO A FILE =================

// ----------- 1A. Synchronously -------------
fs.writeFileSync("text.txt", "This is just a simple example", "utf8");


// ----------- 1B. Asynchronously -------------
fs.writeFile("text.txt", "This is just a simple example", "utf8", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully!");
    }
});




// ========== 2. READING A FILE =================

// ----------- 2A. Synchronously -------------
let data = fs.readFileSync("text.txt", "utf8");
console.log(data);

// ----------- 2B. Asynchronously -------------
fs.readFile("text.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});
console.log("This will run before the file is read!");


// ========== 3. CREATING DIRECTORIES =================
// ----------- 3A. Synchronously -------------
fs.mkdirSync("new-directory");

// ----------- 3B. Asynchronously -------------
fs.mkdir("new-directory", (err) => {
    if (err) {
        console.error("Error creating directory:", err);
    } else {
        console.log("Directory created successfully!");
    }
});