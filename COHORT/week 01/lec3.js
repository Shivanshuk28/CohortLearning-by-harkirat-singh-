//Study about asynchronous js ,callbacks, promises and arrow functionss




// var fs = require("fs");
// var path = require('path');

// readFile("./a.txt",function(contents){
//     console.log(contents);
// });

function printToScreen(){
    console.log("hello world");
}
setTimeout(printToScreen,2*1000);



console.log("hi shiva");
let count=0;
for(let i=0;i<100;i++){
    count++;
}
console.log(count);

