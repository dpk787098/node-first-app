const http = require("http");
const fs = require("fs");

const data = fs.readFileSync('temp.txt','utf-8');
// const Data = JSON.parse(data);
let requestedData;
const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/home'){
        req.on('data',(chunk)=>{
            requestedData = chunk;
        })
        req.on('end',()=>{
            fs.writeFile('temp.txt',requestedData,(err)=>{
                console.log(err);
            })
        })
        res.end("written home successfully");
    }
    else if(pathName === '/movie'){
        req.on('data',(chunk)=>{
            requestedData = chunk;
        })
        req.on('end',()=>{
            fs.writeFile('temp.txt',requestedData,(err)=>{
                console.log(err);
            })
        })
        res.end("written movie successfully");
    }
    else if(pathName === '/cricket'){
        req.on('data',(chunk)=>{
            requestedData = chunk;
        })
        req.on('end',()=>{
            fs.writeFile('temp.txt',requestedData,(err)=>{
                console.log(err);
            })
        })
        res.end("written cricket successfully");
    }
    else if(pathName === '/update'){
        req.on('data',(chunk)=>{
            requestedData = chunk;
        })
        req.on('end',()=>{
            fs.writeFile('temp.txt',requestedData,(err)=>{
                console.log(err);
            })
        })
        res.end("Updated successfully");
    }
    else{
        res.writeHead(400,{'Content-Type':'text/html'});
        res.end("<h1>Error 404! Page Not Found</h1>")
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log("listening");
})