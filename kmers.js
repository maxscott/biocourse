fs = require('fs');

frequencies = function(data,k){

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

run = function(data,k) {

  freq = frequencies(data,k); 

  max = 0;
  out = "";
  for(var x in freq){
    if(max < freq[x]) max = freq[x];
  }
  for(var x in freq){
    if(freq[x] == max) out += x + " ";
  }
  console.log(out);
};


fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  run(data,parseInt(process.argv[3]));
});

