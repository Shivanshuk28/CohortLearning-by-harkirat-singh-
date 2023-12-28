      //This is my first javascript code.
console.log('HELLO WORLD');

let nname='SHIVA';
console.log(nname);
//variables can not be a reserve keyboard.
//should be meaningful name
//cannot start with a number(1name)
//can't contain a space or hyphen (-).
//are casesensitive

let firstname='mosh';
let lastname='hamedani';

//constants

/* 
let interestRate=0.3;
interestRate=1;
console.log(interestRate);
*/


// int this way the value of variable is changing. so instead of this
//use const keyword.

const interestRate=0.3;
// interestRate=1; //this will show error , because constants can't be changed once declared.
console.log(interestRate);

// type of datatypes
// 1)String
// 2)Number
// 3)Boolean
// 4)undefined
// 5)null
let name='mosh';// string literal 
let age=40;//booleean litreal
let isapproved=true; //boolean literal
let first= undefined;
let last=null;//used in situation where you wnat to clear the value of variable.

//dynamic typing,
console.log(typeof name);// to check its type
name=1;
console.log(typeof name);// to check its type
console.log(typeof age);
age=30.1;
console.log(typeof age);// it is still a number, no float,no decimal ......nothing
console.log(typeof isapproved);//it is boolean
console.log(typeof first);// it is of type undefined.
console.log(typeof last);// it is of type object(howw???????????????????)

//Reference types
//1)object
let person={
    name:'mosh',
    age:30
};
console.log(person);
//dot notation
person.name='shiva';
console.log(person.name);

//Bracket notation
person['name']='marriauna';
console.log(person.name);


// 2)Arrays
//to store a lsit

let selectedcolors=['red','blue'];
selectedcolors[2]='green';
selectedcolors[2]=1;//this means we can store different datatypes in an array.
console.log(selectedcolors);
console.log(selectedcolors[0]);

console.log(typeof(selectedcolors));//an array is of datatype object

//it helps us know the data type length of an arrya.

console.log(selectedcolors.length);

// 3)Functions
// a set of statements that performs a task and calculate value.

function greet(name){
    console.log('Heloo '+name);
}
function greet(name,lname){
    console.log('Heloo '+name +' '+ lname);
}
//if you create two functions with same name but different parameters,so the newly created function will be used out of two.
greet('shiva');//thats why in this case it is showing undefined.
greet('marry','hilton');




//types of function

//calculate a vlaues

function square(num){
    return num*num;
}

let number=square(2);
console.log(number);