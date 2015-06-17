var path = require('path');
var mymodule = require('./filefiltermodule');

var filetoRead = process.argv[2];
var fileFilter = process.argv[3];

/*fs.readFile(filetoRead, function(err,data){
   console.log(data.toString().split("\n").length - 1); 
});*/

/*
var contents = fs.readFileSync(filetoRead);
console.log(contents.toString().split("\n").length - 1);
*/

/*fs.readdir(filetoRead, function (err, files) {
    files.forEach(function(elem){
        if (elem.substr(-(fileFilter.length + 1)) == "." + fileFilter)
            console.log(elem);
    });
})*/

/*fs.readdir(filetoRead, function(err, files){
    files.forEach(function(elem){
        if(path.extname(elem) == "." + fileFilter) console.log(elem);
    })
})*/

mymodule(filetoRead, fileFilter, function(err,files){
    files.forEach(function(ele){
        console.log(ele);
    })
})