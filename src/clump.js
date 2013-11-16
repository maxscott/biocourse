fs = require('fs');

function runClumps(k, L, t, data) {
  // todo
}

function processFile(err, data) {

  lines = data.toString().split("\n");
  data = lines[0];
  pattern = lines[1].split(" ");
  k = pattern[0],
  L = pattern[1],
  t = pattern[2];

  matches = runClumps(k, L, t, data);
  console.log(matches.join(" "));  
}

file = process.argv[2];
fs.readFile(file, processFile);