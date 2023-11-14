var Component = document.getElementById("app");
Component.innerHTML= `<h1> Hello javascript </h1>`;
//NB semi colons are optional
//basic concepts
//variables and value/Datatypes
//variable declaration
var a; // using the var keyword
let b; // using the let keyword
let i,j,k;
//variable constants
const pi = 3.142; //using the const keyword

//keyword are system reserved word and should not be used when naming variables and functions
//variable initialzation
a = 10;
b=20.5;
let name = "Njeri";
const VAT = 16;

//Data types in javascript
/**
 * Number
 * string
 * boolean
 * undefined
 * symbol
 * NaN
 * Null
 * BigInt
 * Objects
 */
//numbers
let age = 21;
let marks = 30.6;

//method with numbers
age = "10";
let myAge = parseFloat(age);
console.log(myAge);
console.log(typeof(myAge));
marks = 30.76;

let myPi = pi;
console.log(myPi);// 3.142
myPi = 300;
console.log(myPi); // 300
console.log(marks.toFixed(5));
console.log(marks.toPrecision(6))
console.log(marks.toString())

console.log(Math.ceil(marks)); //round up to the nearest integer
console.log(Math.floor(marks));//rounds down to the nearest integer
console.log(Math.ceil(Math.random() * 100)); //math.random generates random numbers

//strings
let myName = "Kenneth";
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase())
console.log(myName.length);

// strings are immutable. Cannot be changed during execution
let paragraph = "the quick fox jumps over the lazy dog";
let mySlice = paragraph.slice(9);//extracts a part of the string based on the index
console.log(mySlice);
let mySubstring = paragraph.substring(9);//same as slice but value less than 0 are treated as 0
console.log(paragraph.replaceAll('quick', 'slow')) //replace method
let myString = paragraph.split(' ');
console.log(myString.length);
console.log(paragraph.length);
console.log(typeof(myString));

//string concantenation
let firstName = "Loise";
let secondName = "Njeri";
let surname = "Maina";

let fullname = firstName +" " + secondName +" " + surname;
console.log("Hello " + fullname);
a = 10 + 10 + " Hello " + 10;
console.log(a);
a= "10"+"10"+"hello";
console.log(a);
a="10"-"10"+" hello";
console.log(a);

console.log(`Hello ${fullname}`);
//escape character
//The big "tree" was cut.
a= "The big \"tree\" was cut";
b='It\'s a great day'

//Operators
/**
 * Arithmetic + - * /
 * logical OR, AND
 * Equality == === !== != < >
 */
//Arithmetic operators
//add +
//Multiplication *
//subtraction -
//division /
//modulus %

//modulus returns the remainder of a division equation
 a = 10 % 5;
console.log(a);
//logical operators
//OR atleast one condition is true ||
//AND both conditions must be true && \

//Equality
//equal to 
/**
 * a = 3;assignment operation
 * a == 3; True equality operator
 * a==4; false
 */
/**
 * equal to value and equal to type ===
 */
a = 3;
if(a === "3"){  // !==
    console.log("equal to");
}else{
    console.log("not equal to");
}

if(a == "3"){ // !=
    console.log("equal to");
}else{
    console.log("not equal to");
}

//control flow
/**
 * conditional statements and loops
 * if, if else, if else if else;
 * switch case;
 *  for loop
 * for in
 * for for
 *  foreach
 * while loop
 * do while
 * 
 */

let Friends = ["Teddy", "Njeri", "Jimmy", "Milly"];

for( let friend in Friends){
    console.log(`this my friend ${friend}`);
}

for(i=0; i <= 10; i++){
    if(i == 3) {break};
    console.log(i); //0,1,2
}

for(i=0; i <= 10; i++){
    if(i == 3) {continue};
    console.log(i); //0,1,2,4,5,6,7,8,9,10
}

//functions

function AddNumbers(){
    //code here
    a = 10;b=5;
    return a+b;
}

let results = AddNumbers();
console.log(results);
console.log(AddNumbers());
//function parameters
function LargestNumber( num1, num2){
    num1 > num2 ? console.log(num1) : console.log(num2);
    /*if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }*/
}

LargestNumber(10,5);

//arrow functions
const printStarsPattern = () =>{
    for(i=0; i > 10; i++){
        console.log("*");
    }
}
printStarsPattern();

//scope variable
//global variables are available throught the entire project
const car = "Benz"; //this is a local variable
//local variables are only available inside the scope or function in which they are created

function myCar(){
    const car = "Nissan"; // this is a local variable
    console.log(car);
}
myCar();
console.log(car);









