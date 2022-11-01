const fs = require("fs");

//  reading and writing to the file system
// => there are two ways of reading writing to the file system

/* --------SYNCHRONOUS WAY-------- */

// const data = fs.readFileSync("./TextFiles/hello.txt", "utf-8");
// console.log(data);

// to write to a file in a synchronous a way
// if the specified file doesn't exits, it creates the file
fs.writeFileSync(
  "./TextFiles/written.txt",
  `Hey there, from the file "written.txt"`,
);

// The above actually replaces the existing content of the file
/* ----- TO APPEND TO THE FILE, we use the 'a' flag */
fs.writeFileSync("./TextFiles/written.txt", "\nAppended text", { flag: "a" });

const writtenFileData = fs.readFileSync("./TextFiles/written.txt", "utf-8");
console.log(writtenFileData);

/* --------ASYNCHRONOUS WAY-------- */
