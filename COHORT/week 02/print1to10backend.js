// const fs=require("fs");
const express=require("express");

const app = express()
const port = 3000
function sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;
}
//req and res act as 2 parameters where (req) requests the user to input the counter at the url of local host like: http://localhost:3000/handlesum?counter=10(this method is called query parameters)
// res sends the response 
function handleFirstRequest(req,res){
    var counter=req.query.counter;
    console.log(req.query.counter2);
    console.log(req.query.counter3);
    var ans=sum(counter);
    console.log(ans);
    var ans2="the sum is "+ans;
    res.send(ans2);
}
function createUser(req,res){
    res.send("HELLOO WORLD");
}
app.get('/handlesum',handleFirstRequest)
app.post('/createUser',createUser)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)

// function callback(err,data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",callback);

//NODE PACKET MANAGER


