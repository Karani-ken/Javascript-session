//oop
var component = document.getElementById('app');
var element = document.createElement('h3');
element.innerHTML="Javascript OOP";
component.appendChild(element);
//classes
class Car{
    //constructor
    constructor(model, year){
        this.model = model,
        this.year = year
    }
    //method
   Age(){
    let date = new Date();
    return date.getFullYear() - this.year;
   }
   //passing arguments to methods
   mileage(x,y){
        return x * y;
   }
}

let MyCar = new Car("Tesla", 2020); //creating an object as instance of a class
console.log(MyCar.model);
console.log(MyCar.Age());
console.log(MyCar.mileage(3,5));