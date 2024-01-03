function sum(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}


function anything(num1,num2,whattodo){
    var ans=whattodo(num1,num2);
    return ans;
}

var mainn=anything(2,3,divide);
console.log(mainn);
