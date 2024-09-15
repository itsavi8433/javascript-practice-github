//Conversion of datatypes

let score = "33abc"

console.log(score);      //o/p =>33abc
console.log(typeof score);  // o/p =>string

valueinnumber =Number(score);
console.log(typeof valueinnumber);  // o/p => number
console.log(valueinnumber);    // o/p=> NaN (Not a Number)

// let question = true;
let question =false;
console.log(question);
console.log(typeof question);

let convertintonumber = Number(question);
console.log(typeof convertintonumber)
console.log(convertintonumber);              //in boolean true == 1 or false == 0

// let space = null;
// console.log(space);     //o/p =>null
// console.log(typeof space);  //o/p => object

// let innumber = Number(space);  
// console.log(typeof innumber);   //o/p =>number
// console.log(innumber);          //o/p => 0;

let space = undefined;
console.log(space);   //o/p => undefined
console.log(typeof space);  //o/p =>undefined

let innumber = Number(space);
console.log(typeof innumber);   //o/p =>number
console.log(innumber);    //o/p => NaN (Not a Number);

/*
null is not a undefined it is an empty value but null convert into number it shows 0
and undefined clarifies that the value is not defined so that undefined datatype
convert into number it show NaN(Not a Number).
*/

let isloggedin = "abhishek";
console.log(isloggedin);  //o/p =>1
console.log(typeof isloggedin)  //o/p =>number

let booleanisloggedin = Boolean(isloggedin);
console.log(typeof booleanisloggedin);   //o/p=> boolean
console.log(booleanisloggedin);          //o/p =>true

/*
note: if we use empty double quotes then the answer in boolean is false
but if we use anyvalue in double quote then the answer is true
*/

