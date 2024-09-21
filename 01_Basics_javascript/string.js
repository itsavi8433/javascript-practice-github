let name = "Abhishek Singh";
let repocount = 50;

// console.log(name + repocount + " value");  --> use not this type of syntax in mordern era

// console.log(`Hello Myself ${name} and my repocount is $ {repocount}`);  // use this syntax in string

const Gamename = new String("abhisheksingh");   // use object in javascript  

console.log(Gamename[6]);    // we can put key 
// console.log(Gamename[s]); // we can put value as this

// console.log(Gamename.__proto__);
// console.log(Gamename.length);
// console.log(Gamename.toUpperCase());
// console.log(Gamename.toLowerCase());
// console.log(Gamename.charAt(5));
// console.log(Gamename.indexOf("i"));

// console.log(Gamename.substring(3 , 7));   //ishe    // last value not inclued i.e 7

console.log(Gamename.slice(2, 4));

let newstring = "    sumitsingh     ";
console.log(newstring);
console.log(newstring.trim());

let url ="https://abhishek.com/abhishek%20singh"

console.log(url.replace("%20" , "_"));
console.log(url.includes("%20"));
console.log(url.includes("abhi"));
console.log(url.includes("kumar"));
