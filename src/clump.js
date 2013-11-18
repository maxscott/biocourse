fs = require('fs');

function frequencies(data,k){

  freq = {};

  for(var i = 0; i < data.length-k; i++){
    
    curr = data.substring(i, i+k);
    
    if(freq[curr] > 0){
      freq[curr] = freq[curr] + 1;
    }
    else{
      freq[curr] = 1;
    }      
  }

  return freq;
}

function runClumps(k, L, t, data) {

  clumps = [];

  for(i = 0; i < (data.length-L); i++) {

    windowedData = data.substring(i, i+L);
    freq = frequencies(windowedData, k);

    for(var x in freq) {

      // correct t number, and unique
      if(freq[x] == t && clumps.indexOf(x) == -1) {
        clumps.push(x);
      }
    }
  }
  
  return clumps;  
}

function processFile(err, file) {

  lines = file.toString().split("\n");
  params = lines[1].split(" ");

  data = lines[0].toString();

  k = parseInt(params[0]),
  L = parseInt(params[1]),
  t = parseInt(params[2]);

  matches = runClumps(k, L, t, data);
  console.log(matches.join(" "));  
}

file = process.argv[2];
fs.readFile(file, processFile);