fs = require('fs');

function getMatchIndices(regex, str) {
   var result = [];
   var match;
   regex = new RegExp(regex);
   while (match = regex.exec(str))
      result.push(match.index);
   return result;
}

processFile = function(err, data) {

	lines = data.toString().split("\n");
	pattern = lines[0];

  for(i = 1; i < lines.length; i++){
    matches = getMatchIndices("/" + pattern + "/g", lines[i]);
    console.log(matches.join(" "))
  }
}

fs.readFile(process.argv[2], processFile)