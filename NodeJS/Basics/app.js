const { prasanna, rahul } = require("./names");
const { lastName, status } = require("./alternativeSyntax");
const greet = require("./greet");

console.log(lastName, status);
greet(prasanna);
greet(rahul);
