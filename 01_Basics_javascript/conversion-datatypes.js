//Conversion of datatypes

let score = "33abc"

// console.log(score);      //o/p =>33abc
// console.log(typeof score);  // o/p =>string

valueinnumber =Number(score);
// console.log(typeof valueinnumber);  // o/p => number
// console.log(valueinnumber);    // o/p=> NaN (Not a Number)

// let question = true;
let question =false;
// console.log(question);
// console.log(typeof question);

let convertintonumber = Number(question);
// console.log(typeof convertintonumber)
// console.log(convertintonumber);              //in boolean true == 1 or false == 0

// let space = null;
// console.log(space);     //o/p =>null
// console.log(typeof space);  //o/p => object

// let innumber = Number(space);  
// console.log(typeof innumber);   //o/p =>number
// console.log(innumber);          //o/p => 0;

let space = undefined;
// console.log(space);   //o/p => undefined
// console.log(typeof space);  //o/p =>undefined

let innumber = Number(space);
// console.log(typeof innumber);   //o/p =>number
// console.log(innumber);    //o/p => NaN (Not a Number);

/*
null is not a undefined it is an empty value but null convert into number it shows 0
and undefined clarifies that the value is not defined so that undefined datatype
convert into number it show NaN(Not a Number).
*/

let isloggedin = "abhishek";
//  console.log(isloggedin);  //o/p =>1
//  console.log(typeof isloggedin)  //o/p =>number

let booleanisloggedin = Boolean(isloggedin);
// console.log(typeof booleanisloggedin);   //o/p=> boolean
// console.log(booleanisloggedin);          //o/p =>true

/*
note: if we use empty double quotes then the answer in boolean is false
but if we use anyvalue in double quote then the answer is true
*/

//***************************Operations*************************

let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(6-3);
// console.log(9*8);
// console.log(5/4);
// console.log(5**4);   // 5 is to power 4
// console.log(5%3);

let str1 = "Hello";
let str2 = " Abhishek"
// console.log(str1 + str2);

// let onenumber = "1";
// let secondnumber = 2;
// let answer = onenumber + secondnumber;
//  console.log(answer);
//  console.log(typeof answer);

let onenumber = 1;
let secondnumber = "2";
let answer = onenumber + secondnumber;
//  console.log(answer);
//  console.log(typeof answer);

 let one = 1;
 let two = 2;
 let three = "3";
 let four = one + two + three;
//  console.log(four);
//  console.log(typeof four);

//  console.log(true);    //o/p =>true
//  console.log(+true);    //o/p=> 1
// console.log(+false);    //o/p => 0
// console.log(+"");       //o/p => 0
console.log(+"abhishek");   //o/p =>NaN (Not a Number)
let name = "abhishek";

let valueinboolean = Boolean(name);
console.log(valueinboolean);
console.log(typeof valueinboolean);

let counternumber = 100;
counternumber++
console.log(counternumber);    //o/p =>101
++counternumber
console.log(counternumber);    //o/p =>102
++counternumber
console.log(counternumber);   //o/p =>103
--counternumber
console.log(counternumber);  //o/p =>102
counternumber--
console.log(counternumber);  //o/p =>101