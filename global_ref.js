// globle is similar to web javascript window object
console.log(global);

global.setTimeout(() => {                           // Can omit the global
    console.log("Ran after 2 seconds delay");
}, 2000);

console.log("End!!!");
