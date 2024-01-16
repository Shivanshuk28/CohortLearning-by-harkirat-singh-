const express=require("express");

const app = express()
const port = 3000

function changename(req,res){
    var oldname=req.query.oldname;
    var newname=req.query.newname;
    var ans=`Your old name was ${oldname} and new name is ${newname}`;
    res.send(ans);
}

app.put('/',changename);

function start(){
    console.log(`listening to port ${port}`)
}
app.listen(port,start)