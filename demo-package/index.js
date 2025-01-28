const loadash = require('lodash');


const names = ['John', 'Rabiu', 'Michael', "Jamil"];
const capitalized = loadash.map(names, loadash.capitalized);

console.log(capitalized);