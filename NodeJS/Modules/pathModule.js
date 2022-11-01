const path = require("path");

// to find the path separator based on the platform
console.log(path.sep);

// to join various paths to create an absolute path
const absPath = path.join(__dirname, "pathModule.js");
console.log(absPath);

// to find the base of the path => lowest hierachical file
const base = path.basename(absPath);
console.log(base);

// returns the directories i.e only folders of specified paths
console.log(path.dirname(absPath));
