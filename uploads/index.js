const http=require("http");
// const fs=require("fs");
// const url=require("url")
const express=require("express");
const app=express();
app.get('/',(req,res) =>{
    return res.send("hello feom home")
})
app.get('/about',(req,res)=>{
    return res.send("hello from about")
})
const myServer=http.createServer(app);
app.listen(8000,()=>console.log("Server started"))





// myServer.listen(8000,() => console.log("Server started"));

// const myServer=http.createServer((req,res)=>{
//     // const log=`${Date.now()}:${req.url} New req recived\n`;
//     // fs.appendFile("log.txt", log, (err,data) => 
//     // {
//     //     // res.end("hellow");
//     //     switch (req.url){
//     //               case'/': res.end("hello From Server"); 
//     //               break;
//     //               case'/about':res.end("I am piyush Garg");
//     //                break;
            
//     //               default:res.end("404 not found");
//     //     }
                
//     // });
// });