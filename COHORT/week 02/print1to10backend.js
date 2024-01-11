// const fs=require("fs");
const express=require("express");

const app = express()
const port = 3000
function sum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;
}
function handleFirstRequest(req,res){
    var ans=sum(100);
    console.log(ans);
    var ans2="the sum is "+ans;
    res.send(ans2);
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


