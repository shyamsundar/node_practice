var fs = require("fs");
var path = require("path");

module.exports = function (dirname, filterext, callback) {
    fs.readdir(dirname, function (err, files) {
        if(err) return callback(err);
        var filteredArr = files.filter(function (elem) {
           return path.extname(elem) === "." + filterext
        });
      return  callback(null, filteredArr);
    })
};