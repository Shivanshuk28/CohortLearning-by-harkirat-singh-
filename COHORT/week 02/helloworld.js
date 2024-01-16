// const fs=require("fs");
const express=require("express");

const app = express()
const port = 3000

function handleFirstRequest(req,res){
    
    res.send("hello world");
}
app.get('/',handleFirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)

// function callback(err,data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",callback);

//NODE PACKET MANAGER


