const component = document.getElementById("app");

component.innerHTML=`<h1>Hello Advanced Javascript</h1>`

//Arrays
//how to create an array
const cars = ["volvo","subaru","Lexus"];
const myCars = new Array("Volvo","subaru","Lexus");
for(let i=0; i<cars.length;i++){
    //accessing arrays
    console.log(cars[i]);
}
//changing array elements
cars[0] = "Ferrari";
for(let i=0; i<cars.length;i++){
    console.log(cars[i]);
}
var newParagraph = document.createElement('p');
newParagraph.textContent = cars.toString();
component.parentNode.insertBefore(newParagraph,component);

//array properties and methods
//array.length gives the length of an array
console.log(cars.length); //3
//looping through an array 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let element = document.createElement('ul');
/*for(let i=0; i< fruits.length;i++){
    let newLi = document.createElement('li');
    newLi.textContent = fruits[0];
    element.appendChild(newLi);
}*/
component.appendChild(element);

//array foreach
fruits.forEach(myFunction);
function myFunction(value){
    let newLi = document.createElement('li');
    newLi.textContent = value;
    element.appendChild(newLi);
}
component.appendChild(element);

//adding elements into an array
fruits.push("Pineapple");
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
//using the length property
fruits[fruits.length] = "lemon";
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

//nb adding elements with high indexes creates undefined holes in the array
/**
 * fruits[9] = "passion fruit";
 */

//array methods
//concantentaton
const Girls = ["Njeri","Lucy","Breanna"];
const Boys =["Kenny","Jimmy","Jamal"]

const Friends = Girls.concat(Boys);
Friends.forEach(myFunction);
function myFunction(value){
    let newLi = document.createElement('li');
    newLi.textContent = value;
    element.appendChild(newLi);
}
component.appendChild(element);
/**
 * const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
 */

//sorting arrays
const numbers = [1,3,45,600,2.5,30,20,100,400,60,90,20,10];
for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}
numbers.sort(function(a,b) {return a-b});
for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}
var space = document.createElement('p');
space.textContent = "Arrays";
component.appendChild(space);
numbers.sort(function(a,b) {return b - a});
numbers.forEach(myFunction);
function myFunction(value){
    let newLi = document.createElement('li');
    newLi.textContent = value;
    element.appendChild(newLi);
}
component.appendChild(element);

//random order sort
//points.sort(function(){return 0.5 - Math.random()});

//sets
//how to create a set
const letters = new Set(['a','b','c']);
const fruits = new Set();
fruits.add('orange');

//map
const friends = new Map(
    ["james", 100],
    ["Nimrod",10]
)
friends.set("Ashley", 20);
//get()
//delete()
//has()

//Regular Expressions
// /pattern/modifiers

let mySentense = "this is a goat";
mySentense.search("this");
mySentense.search(/this/i);
/**
 * i
 * g
 * m
 */
//regexp patterns
const pattern = /[abcdefghijklmnopqrstuvwxyz][1234567890]/i
pattern.test("This is a 92 podcast 001 ep 1");




