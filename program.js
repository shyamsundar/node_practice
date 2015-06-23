var http = require('http');
var concat = require('concat-stream');
http.get(process.argv[2], function(response){
    response.setEncoding('utf-8');
    respData = concat(function(data){
        console.log(data.length);
        console.log(data.toString());
    });
    response.pipe(respData);
    
    response.on('error', console.error);
})