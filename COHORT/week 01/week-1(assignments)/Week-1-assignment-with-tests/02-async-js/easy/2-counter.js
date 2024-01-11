// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



var count=1;
function stopwatch(){
    console.clear();
    console.log(count);
    count++;
    setTimeout(stopwatch,1000);
}
setTimeout(stopwatch,1*1000);

// for(var i=0;i<100;i++){
//     setTimeout(stopwatch,(i+1)*1000);
// }



































































// (Hint: setTimeout)