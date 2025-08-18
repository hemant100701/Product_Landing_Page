const http= require("http");
const fs = require('fs');

http.createServer((req,res)=>{
    
    fs.readFile('index1.html','utf-8', (error,data)=>{
        if(error){
            res.writeHead(200,{"content-type":"text/plain"});
            res.write("Error has encountered");
            return;
        }
        else{
            res.writeHead(200,{"content-type":"text/html"});
            if(req.url = '/'){
                res.write(data);
            }
            else if(req.url = '/submit'){
                res.write('Data submitted');
            }
            
        }
        res.end();
    })
    // console.log(req.url);
    // if(req.url == '/'){

    //     res.write(`
    //         <form action = '/submit' method = 'post'>
    //         <input type = "text" placeholder = "Enter your Name" name = 'name' >
    //         <input type = "text" placeholder = "Enter your mail" name = 'mail' >
    //         <button>submit</button>
    //         </form>
    //         `);
    // }
    // else if(req.url == '/submit'){
    //     res.write(`<h1>Data Submitted</h1>`);
    // }
    //res.end();
    
}).listen(5000);