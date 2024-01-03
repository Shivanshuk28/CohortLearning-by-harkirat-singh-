const fs=require('fs');

function summ(n){
    let sum=0;
    for(var i=0;i<n;i++){
        sum+=i;
    }
    console.log(sum);
}

//callbacks: functions inside functions(not working here but working on replit, because of first line not working)
function fileIsRead(err,contents){
    summ(contents)
}

fs.readFile("chocolate.txt",'utf8',fileIsRead);

//setTimeout function
setTimeout(function(){
    console.log("10 seconds have passed");
},10*1000);

summ(5);


// star pattern
function shallow(n){
    for(i=0;i<n;i++){
        if(i==0 || i==n-1){
            str="";
            for(j=0;j<n;j++){
                str=str+"*";
            }
            console.log(str);
        }
        else{
            str="";
            for(j=0;j<n;j++){
                if(j==0 || j==n-1){
                    str=str+"*";
                }
                else{
                    str=str+" ";
                }
            }
            console.log(str);
        }
    }
}
shallow(9);

