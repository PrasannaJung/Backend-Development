// nodejs gives us an os module for interacting with our system

const os = require("os");

// some basic os methods in node js

// info about the current user
const userInfo = os.userInfo();
console.log(userInfo);

// userinfo gives an object which has various user props
console.log(userInfo.homedir);
console.log(userInfo.username);

// to get the system uptime
const up = os.uptime();
console.log("The system has been running for", up, "secs.");

// for finding some info about the system itself
const systemInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(systemInfo);
