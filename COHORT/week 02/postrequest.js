const express=require("express")
const app=express()
const port=3000
//post method
function createLogin(req,res){
    var name=req.query.name;
    var pass=req.query.pass;
    var prompt=`you have not entered the correct password`;
    if(pass==1234){
    var ans=`your name is ${name}`;
    res.send(ans);
    }
    else{
        res.send(prompt);
    }
}
app.post('/',createLogin);

function start(){
    console.log(`listening to port ${port}`)
}
app.listen(port,start)