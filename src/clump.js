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

  winners = [];

  // seeded with the 0th...
  potentials = frequencies(data.substring(0, L), k);

  for(var x in potentials) {
    if(freq[x] >= t) {
      winners.push(x);
    }
  }

  // starts on the 1st move
  for(i = 1; i < (data.length-L); i++) {

    //decrement the lost value
    drop = data.substring(i-1, i+k-1);
    potentials[drop]--;
    if(potentials[drop] < 1) {
      delete potentials[drop];
    }

    //increment the new value
    add = data.substring(L+i-k, L+i);
    
    if(potentials[add] == null){
      potentials[add] = 1;
    }    
    else {
      potentials[add]++;
      if(potentials[add] >= t && winners.indexOf(add) == -1) {
        winners.push(add);
      }
    }
  }
  
  return winners;  
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