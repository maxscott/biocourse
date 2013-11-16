var lazy    = require("lazy"),
    fs      = require("fs");

new lazy(fs.createReadStream(process.argv[2]))
   .lines
   .forEach(function(line){
      rev = line.toString();

    rev = rev.replace(/A/g,"B");
    rev = rev.replace(/T/g,'A');
    rev = rev.replace(/B/g,'T');
    rev = rev.replace(/C/g,'D');
    rev = rev.replace(/G/g,'C');
    rev = rev.replace(/D/g,'G');
    rev = rev.split("").reverse().join("");

    console.log(rev);
   }
);