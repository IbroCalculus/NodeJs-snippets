// How to execute a Node.js script with command line arguments

console.log("All arguments:", process.argv);
console.log("First argument:", process.argv[2]);
console.log("Second argument:", process.argv[3]);

/*
- RUN: node/nodemon command_line_args.js hello world

- OUTPUT:
All arguments: [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ibrahimsuleiman\\Documents\\Reference\\NodeJs - snippets\\command_line_args.js',
  'hello',
  'world'
]
First argument: hello
Second argument: world
 */
