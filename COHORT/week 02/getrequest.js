const express=require("express");
const app=express()
const port=3000

// function print(req,res){
//     var number=req.query.number;
//     for(var i=0;i<number;i++){
//         // var n=i;
//         res.send(i);
//     }
    
// }
function print(req,res){
    var number=req.query.number;
    var result=[];
    for(var i=1;i<=number;i++){
        // var n=i;
        result.push(i);
    }
    res.json(result);
    
}
app.get('/',print)

function start(){
    console.log(`listenenig to port ${port}`)
}
app.listen(port,start)


// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

// app.listen(port,()=>{
//     console.log("Listening to the port ")
// })