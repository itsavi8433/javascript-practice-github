// stack memory

let nameone = "abhishek singh";
let number = 8433153892;

let nametwo = nameone;

// console.log(nametwo);

nametwo = "Sumit Singh"

console.log(nameone);
console.log(nametwo);

/*
reason:- primitive datattype stored in stack memory so that the changes in copy of a original value
 */

//heap memory

let obj1 = {
    email:"abhishek@gmail.com",
    number:8433153892
}
let obj2 = obj1;

obj2.email = "singhsumit8126758502";
obj2.number = 8126758502;

console.log(obj1.number);
console.log(obj2.number);

/*
reason:- non-primitive datatype stored in heap memory so that 
changes in orginal value due to refrence of a original value
*/

