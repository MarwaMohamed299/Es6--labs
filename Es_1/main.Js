// 1) Swap the values of two variables using destructuring 

let Book = "Video";
let Video = "Book";

[Book,Video] = [Video,Book];

console.log(Book);
console.log(Video);


    //  2) Using rest parameter and spread operator return max value from any array 
// note: array length is not fixed return min and max value and display each of 
// them separately after function call 

let arr = [1, 2, 3, 4, 5];

function findMaxAndMin(...arr) {  // Rest parameter to gather arguments
  let maxArr = Math.max(...arr);  // Spread operator to pass array elements as arguments
  let minArr = Math.min(...arr);
  console.log(`Max is ${maxArr} and Min is ${minArr}`);
}

findMaxAndMin(...arr);



// 3) Study new array api methods then create the following methods and apply 
// it on this array var fruits = ["apple", "strawberry", "banana", "orange", 
// "mango"] 
// a. test that every element in the given array is a string 

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

function isString(...fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (typeof fruits[i] !== 'string') {
            return false;  
        }
    }
    return true;  
}

console.log(isString(...fruits));  




function checkAllStrings(...items) {
    let areAllStrings = items.every(i => typeof i === 'string'); 
    console.log(areAllStrings);
}

checkAllStrings(...fruits);


// b. test that some of array elements starts iwith "a" 

function checkIsStrartsWithA(...items){
    let areAllStartsWithA = items.every(item => item.startsWith("a"));
    console.log(areAllStartsWithA);

}
checkIsStrartsWithA(...fruits);
// c. generate new array filtered
// from the given array with only elements that 
// starts with "b" or "s" 


// function isStartWith(...fruits) {
//     for (let i = 0; i < fruits.length; i++) {
//         if (fruits[i].startsWith("s") || fruits[i].startsWith("b") ) {
//             filteredArray.push(fruits[i]);
//         }
//     }
// console.log(...filteredArray);
// }

// isStartWith(...fruits);

// another solution

const myfruits = ["apple", "strawberry", "banana", "orange", "mango"];

let filteredArray = myfruits.filter(function(el) {
    return typeof el === 'string' && (el.startsWith("s") || el.startsWith("a"));
});

//OR

let filteredArrayM = myfruits.filter(el=>el.startsWith("a") || el.startsWith("s"));


console.log(...filteredArray);
console.log(...filteredArrayM);


// d. generate new array each element of the new array contains a string 
// declaring that you like the give fruit element 

let loveArr = myfruits.map(function(el,i,arr){
return `i love ${el}`
});

console.log(loveArr);

// e. use forEach to display all elements of the new array from previous point

loveArr.forEach(function(item) {
    console.log(item);
});




////////////////////////////////////////////////

// Write a script to create different shapes (rectangle, square, circle) make 
// all of them inherits from shape class. 


class Shape{
    constructor(dim1,dim2) {
        this.dim1=dim1;
        this.dim2=dim2;
    }
    print(){
        console.log(this.dim1, this.dim2) 
    }
}

class Square extends Shape{
    constructor(x,y ){
        super(x,y);
        this.x=this.dim1;
        this.y=this.dim2;
    }
    CalcArea(x,y){
    console.log(x*y);
    }
}

class Rectangle extends Shape{
    constructor(x,y){
    super(x,y)
    }
    CalcArea(x,y){
        console.log(x*y);
        }

}


const square = new Square(5,5);
square.CalcArea(5,5);

const rectangle = new Rectangle(6,5);
rectangle.CalcArea(5,6);




