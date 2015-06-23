var http = require('http');

http.get(process.argv[2], function(response){
    response.setEncoding('utf-8');
    respData = '';
    response.on('data', function(data){
        respData += data;
    });
    response.on('end', function(){
        console.log(respData.length);
        console.log(respData);
    })
    response.on('error', console.error);
})