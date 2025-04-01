/*
 TYPES OF STREAMS:
// 1. Readable Stream: A stream from which data can be read. Example: fs.createReadStream.
// 2. Writable Stream: A stream to which data can be written. Example: fs.createWriteStream.
// 3. Duplex Stream: A stream that can be both readable and writable. Example: net.Socket.
// 4. Transform Stream: A type of duplex stream where the output is computed based on the input (e.g:compression or encryption). E.g: zlib.createGzip().
etc
 */


const fs = require('fs');

// ============ 1. Create a Readable Stream ============

const readStream = fs.createReadStream('streams_ref.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log("Received chunk of data:");
    console.log(chunk);
});

readStream.on('end', () => {
    console.log("Finished reading the file.");
});

readStream.on('error', (err) => {
    console.error("Error reading file:", err);
});


// ============ 2. Create a Writable Stream ============

const fs = require('fs');

// Create a readable stream to read data from 'largeFile.txt'
const readStream2 = fs.createReadStream('streams_ref.txt', { encoding: 'utf8' });

// Create a writable stream to write data to 'output.txt'
const writeStream = fs.createWriteStream('streams_ref2.txt', { encoding: 'utf8' });

var i = 0;

// Listen for 'data' events on the readable stream
readStream2.on('data', (chunk) => {
    i++;
    console.log("Writing chunk of data:");
    // console.log(chunk);

    // Write each chunk to the writable stream
    writeStream.write(chunk);
});

// Listen for the 'end' event on the readable stream
readStream2.on('end', () => {
    console.log("Finished reading the file.");
    // Signal that no more data will be written to the writable stream
    writeStream.end();
});

// Listen for the 'finish' event on the writable stream
writeStream.on('finish', () => {
    console.log("Finished writing to the file. Total chunks written: " + i);
});

// Handle errors on both streams
readStream2.on('error', (err) => {
    console.error("Error reading file:", err);
});

writeStream.on('error', (err) => {
    console.error("Error writing file:", err);
});

// ============ ALTERNATIVE TO THE ABOVE WRITE METHOD IS USING PIPE. USE A.I TO CONVERT THE ABOVE TO USE PIPE INSTEAD ============