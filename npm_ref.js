/*
NPM is a package manager for Node.js packages, or modules
npm (Node Package Manager) is the Node.js equivalent of Python's pip. 
Both are package managers that allow you to manage and install libraries or dependencies for your project.

Whereas Python libraries are hosted on PyPI (Python Package Index). Node.js libraries are hosted on the npm registry.

npm list -g --depth=0   // view all installed packages globally. NB: --depth=0: Limits the output to only top-level dependencies (ignores nested dependencies). It can be omitted.
npm list --depth=0      // view all installed packages locally 

============ INSTALLING PACKAGE ==============
npm install       // This will install the package in the current directory listed in package.json. It will also create a node_modules folder in the current directory.
npm install <package_name>
npm install <package1_name> <package2_name> <package3_name>

============ CREATING PACAKGE ==============
create a directory for the package and an entry point file in it; index.js

In CMD:
npm init            // And follow the steps. After completion, this will create a package.json file in your current directory.
 OR
npm init -y         // Use this if you don't want to answer any questions. This will create a package.json file with default values.

NB: You can also use the npm command to install packages into the package. ie; loadash, csv-generate ie


------------- Within index.js (Its entry point) -------------

const loadash = require('lodash');

const names = ['John', 'Rabiu', 'Michael', "Jamil"];
const capitalized = loadash.map(names, loadash.capitalized);

console.log(capitalized);


----------------
Within the package.json, add the following: "start": "node index.js". 
ie:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"                                  // THIS LINE
  },

============ PUBLISHING PACAKGE ==============



 */
