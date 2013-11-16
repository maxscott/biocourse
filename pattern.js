fs = require('fs');

function getPatternIndices(pat, str) {
   var result = [];
   var match;
   
   regex = new RegExp(pat, 'g');

   while (match = regex.exec(str)) {
      result.push(match.index);
      regex.lastIndex -= pat.length-1;
    }
   return result;
}

processFile = function(err, data) {

	lines = data.toString().split("\n");
	pattern = lines[0];

  for(i = 1; i < lines.length; i++){
    matches = getPatternIndices(pattern, lines[i]);
    console.log(matches.join(" "))
  }
}

fs.readFile(process.argv[2], processFile)