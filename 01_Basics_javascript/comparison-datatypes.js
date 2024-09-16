console.log(2==2);   //o/p => true
console.log(4>2);    //o/p =>true
console.log(2==="2"); //o/p =>false
console.log(5>=9);    //o/p =>false
console.log(10<=7);   //o/p =>false

console.log("2" > 1);  //o/p =>true
console.log("02" > 1); //o/p =>true

/*
comparison convert the datatype into the number so that the output is true
*/

console.log(1 > "3");   //o/p =>false
console.log(1 == "1");  //o/p =>true

console.log(null == 0);  //o/p =>false
console.log(null > 0);   //o/p =>false
console.log(null >= 0);  //o/p =>true

/*
The reason is that an equality check == or comparisons >,<,>=,<= 
work differently so that,
comparison convert null to a number, treating as a 0
that's why null>0 is false and null >=0 is true
*/

console.log(undefined == 0);   //o/p => false
console.log(undefined > 0);    //o/p =>false
console.log(undefined >= 0);   //o/p =>false

console.log(true == 1);   //o/p =>true
console.log(true > 0);    // o/p =>true
console.log(true >=1);    //o/p =>true

console.log(false == 0);  //o/p =>true
console.log(false >= 0);  //o/p =>true
console.log(false > 3);   //o/p =>false

// boolean change into a number and treated as true = 1 and false = 0