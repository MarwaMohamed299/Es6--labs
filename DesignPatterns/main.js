// 1.Create factory function that returns an object of course [Use factory function pattern].

function createPerson(firstName , lastName){
    return{
        firstName: firstName,
        lastName : lastName,
        getFullName(){
            return` Full Name is  ${ firstName}  ${lastName}`;
        }
    }
}
var p1 = createPerson( "Marwa", "Ghonem");
console.log(p1.getFullName());

// 2.What’s the output of the following piece of code? Explain the code and the output.


// i)Explain the use self-invoking functions in the previous piece of code.
//Self-invoking function: Used to encapsulate the counter variable, ensuring it's not accessible globally.
// ii)Explain the use of closures in the previous piece of code. 
//Closure: Allows the inner function to retain access to counter, enabling it to persist and modify the value across multiple button clicks
// 3.Explain the use of Function.call() in the following example:

// 4.Explain the use of Function.apply() in the following example:

// a)What’s the difference between Function.call() and Function.apply().


// 5.Using ES6 new OOP syntax:
// a.Implement Rectangle custom type:
// a.Constructor that width and height.
// b.CalcCircumference() function that returns  the circumference of the rectangle.
// c.WhoAmI() Static function that prints text (“I am rectangle”).


class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height=height;    
}
calcCircumference(){
    return 2*( this.width + this.height);
 }

 static whoAmI(){
    console.log(' I Am Rectangle')
 }
} 


// b.Implement Square custom type, that inherits from rectangle, and change the following:
// a.Make the constructor of square takes one parameter only.
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

// b.In the square constructor, make width and height of the parent equal.
calcCircumference() {
    return 4 * this.width; 
}
// i.You’ll need to call the super() constructor in the square constructor to access the parent object properties.

// d.Override WhoAmI() function to print text (“I am square”).
static WhoAmI() {
    console.log("I am square");
}

}


// 6.Implement the following design patterns in JS: Module, Mixin and decorator and observer (use a full demo for implementation and using of each pattern):
// a)You can check the following links:
// i)https://dev.to/shijiezhou/top-10-javascript-patterns-every-developers-like-168p
// ii)https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
// iii) https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns
// iv)https://www.dofactory.com/javascript/design-patterns