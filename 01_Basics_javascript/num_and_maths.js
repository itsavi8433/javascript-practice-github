let score = 300;         //automatically define the datatype
// console.log(score);

const balance = new Number(score);  // in this we specified the datatype of a varaiable
// console.log(balance);

let marks = 66.66666666;
// console.log(marks.toFixed(3));
// console.log(marks.toFixed(2));


let marks1 = 89.67;

// console.log(marks1.toString().length);
// console.log(typeof marks1.toString()); /* datatype = string */

let othermarks = 23.5678;

// console.log(othermarks.toPrecision(3))   // 23.6

// console.log(othermarks.toPrecision(5));  //23.568

let anothernumber = 1345.5674      

// console.log(anothernumber.toPrecision(3));
// console.log(anothernumber.toPrecision(2))  //1.3e+4


let hundered = 100000000

// console.log(hundered.toLocaleString());    // o/p value comes based on Us standard
// console.log(hundered.toLocaleString("en-IN"));   // o/p value comes based on indian standard


//*******************************Maths****************************************************** */

// console.log(Math);
// console.log(Math.abs(-50));      //only negative value convert into positive value 
// console.log(Math.abs(90));       // not positive value convert into negative value
// console.log(Math.round(4.3));   // o/p = 4
// console.log(Math.round(4.7));   // o/p = 5
// console.log(Math.ceil(4.01));   // o/p = 5
// console.log(Math.floor(4.8));   //o/p = 4
// console.log(Math.pow(2 , 6));   // o/p = 64
// console.log(Math.sqrt(45));  

// console.log(Math.random());    //Math.random() value always comes in between 0 and 1
// console.log((Math.random()*10) + 1);    // +1 ensure that value atleast comes 1

const max = 6
const min = 1

console.log(Math.floor(Math.random() * (max - min + 1) + min));
