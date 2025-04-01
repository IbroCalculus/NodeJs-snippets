
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

var names = ["a", "b", "c", "d", "e"];

console.log("This is from test2");
    
module.exports = {
    add,
    subtract,
    multiply,
    names
};