console.log("HELLO WORLD");
function summ(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
let ans=summ(5);
console.log(ans);

function fib(n){
    if(n==0 || n==1){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
let ans2=fib(5);
console.log(ans2);

function pattern(n){
    for(i=0;i<n;i++){
        var stringtoprint="";
        for(j=0;j<=i;j++){
            stringtoprint=stringtoprint+"*";
        }
        console.log(stringtoprint);
    }
}
let ans3=pattern(5);
console.log(ans3);


//for loop
var users=['shiva','raman','dishu','lopez'];
for(i=0;i<users.length;i++){
    console.log(users[i]);
}


//while loop
var j=0;
while(j<users.length){
    console.log(users[j]);
    j++;
}


//array of objects
var users=[
    {name:'harkirat', age:12},
    {name:'shiva',age:19}
];
// console.log(user[0]);
function printt(users){
    for(var i=0;i<users.length;i++){
        console.log(users[i].name+"'s age is " +  users[i].age);
    }
}  

printt(users);
