const http = require("http");
const fs = require('fs');
const url = require('url');

function myHandler(req,res){
    const log = `${Date.now().toLocaleString()} calling from ${req.url} \n`;
    const urlVal = url.parse(req.url,true);
    console.log('location', urlVal);
    fs.appendFile('logs.txt', log, () => {
        switch (req.url) {
            case '/about':
                res.end('Hello I am here')
                break;
            case '/contactus':
                res.end('Praj');
                break;
            case '/jobs':
                res.end('We have 3 openings');
                break;
            default:
                res.end('Please Register');

        }

    });
}
const myServer = http.createServer(myHandler);

myServer.listen(7070,(err,data)=>console.log('server started!'))