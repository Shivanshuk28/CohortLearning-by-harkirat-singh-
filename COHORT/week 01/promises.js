    //callback hell

    // setTimeout(function(){
    //     console.log("medicine1 received");
    //     setTimeout(function(){console.log("medicine2 received"); 
    //     setTimeout(function(){
    //     console.log("medicine3 received");
    //     },3000)
    //     },2000)
    // },1000)

//learning about promises.
function promiseBody(resolve){
    setTimeout(resolve,2000)
}

function medicine1Get(){
    var answer=new Promise(promiseBody)

    return answer;
}
function printThing(){
    console.log("medicine1 received");
}

var medicinePromise=medicine1Get();
console.log(medicinePromise);
medicinePromise.then(printThing);


//doing same thing with setTimeout

function getmedicine(){
    console.log("medicine1 received");
}
setTimeout(getmedicine,2000);