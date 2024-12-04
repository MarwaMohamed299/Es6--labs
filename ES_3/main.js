// 1.Try arrow function:
 hello = () =>{
    console.log(`Hello , World !! `)
 }
 hello();
 /*=============================================== */
 let  numArr = [ 1 , 2 , 4 , 12 , 15 , 13 , 22]
// a.With Array.filter() function, to return the odd numbers from an array.
 let odd = numArr.filter(elem=>elem%2 != 0 );
 console.log(odd);
// b.With array.forech() to print the even values.
let getEvenValues = (el) => {
    if (el % 2 === 0) {
        console.log(el);
    }
};
numArr.forEach(getEvenValues);

// c.With array.map() to print the square of each element.

function sqr(num){
return num*10;
}

document.getElementById("print").innerHTML = numArr.map(sqr);

 
// d.“An arrow function does not create its own this context,
// unlike the normal literal function.” – Explain with demo.
 
//Regular Function
const obj1 = {
    name: "Regular Function",
    printName: function () {
        console.log("Inside printName, this.name is:", this.name);

        function innerFunction() {
            console.log("Inside innerFunction, this.name is:", this.name);
        }

        innerFunction(); // 'this' refers to the global object (or undefined in strict mode)
    },
};

obj1.printName();

//Arrow Function
  
const obj2 = {
    name: "Arrow Function",
    printName: function () {
        console.log("Inside printName, this.name is:", this.name);

        const innerFunction = () => {
            console.log("Inside innerFunction, this.name is:", this.name);
        };

        innerFunction(); // 'this' is inherited from the surrounding context
    },
};

obj2.printName();


// 2.Try for…in, for…of and .foreach() with an array.

console.log("Using for...in:");
for (const index in numArr) {
    console.log(`Index: ${index}, Value: ${numArr[index]}`);
}

console.log("Using for...of:");
for (const value of numArr) {
    console.log(`Value: ${value}`);
}

console.log("Using .forEach():");
numArr.forEach((value, index, numArr) => {
    console.log(`Index: ${index}, Value: ${value}, Array: ${numArr}`);
});

   
// 3.Try spread operator with any array of your implementation.
console.log(...numArr)

// 4.Create Person class (Using ES6 syntax), 
//that has name and age properties and show function
// that prints the name and age.
// a)Create static method whoAmI() that prints: “I am a person”

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    show() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  
    static whoAmI() {
      console.log("I am a person");
    }
  }
  
  const person = new Person("Alice", 25);
  person.show(); 
  
  Person.whoAmI();
  

// 5.Create a Student class inherits from Person and contains: 
//University, faculty, and final grade, and use print his data in the console using template literals in this format:
// {Std_name} is a student in faculty of {fac_name} in university {Uni_name}
// And his final grad is {grad}.
// a)Create static method whoAmI() that prints: “I am a student”


class Student extends Person {
    constructor(name , age, university,faculty , finalGrade ){
        super(name,age);
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }

    static whoAmI(){
        console.log(" I Am Student !")
    }

    printData() {
        console.log(
          `${this.name} is a student in the faculty of ${this.faculty} at ${this.university}, and their final grade is ${this.finalGrade}.`
        );
      }
}
let std1 = new Student("Marwa", 25, "SCU", "Dentistry", 50); 
std1.printData();
Student.whoAmI();
 
// 6.Create a mixin that has 2 functions: printName(), printAge().
// a)Use object.Assign() to add the previous mixin to the Student class.

//P.S Mixin is a way to add methods to  a classs without using inheritance

let Mixin = {
    printName(){
        console.log( `Name is ${ this.name}`);
    },
    printAge(){
        console.log( `Age is ${ this.age}`);
    }
}

Object.assign(Student.prototype , Mixin);
Object.assign(Student.prototype , Mixin );

let std2 = new Student("Marwa" , 25)
std2.printName();
std2.printAge();


// 7.Make a set that holds student names.
// a.Try to add repeated names, will the set accept it?
// b.Print the set values using spread operator and using for…of.

let studentNames = new Set();

studentNames.add("Marwa");
studentNames.add("Ahmed");
studentNames.add("Sara");
studentNames.add("Marwa"); 



console.log("Set values:", studentNames); 

let namesArray = [...studentNames]; 
console.log("Using spread operator:", namesArray); 

console.log("Using for...of:");
for (let name of studentNames) {
    console.log(name);
}


// 8.Make a Map that contains the student name as a key, and object that contains an array of his studied courses and his grade in each course. (The object structure as following: {Grades:[
// {Coursename:”JavaScript”, Grade:”Excellent”},
// {Coursename:”Jquery”, Grade:”Good”},
// {Coursename:”CSS”, G rade:”V.Good”}]}
// a.Loop in the Map and display each student along with his grades in all courses.
// b.Make a dropdownlist and fill it with the student names (from the Map), and when the user selects specific student display his grades in all courses.
// Create a Map with student names as keys and course grades as values   #Most important one xxxxxxxxxxxxxxxxxxxxxxxxxx
let studentMap = new Map();

studentMap.set("Ahmed", {
    Grades: [
        { CourseName: "JavaScript", Grade: "Excellent" },
        { CourseName: "Jquery", Grade: "Good" },
        { CourseName: "CSS", Grade: "V.Good" },
    ],
});

studentMap.set("Marwa", {
    Grades: [
        { CourseName: "JavaScript", Grade: "V.Good" },
        { CourseName: "HTML", Grade: "Excellent" },
        { CourseName: "CSS", Grade: "Good" },
    ],
});

studentMap.set("Sara", {
    Grades: [
        { CourseName: "React", Grade: "Excellent" },
        { CourseName: "JavaScript", Grade: "Good" },
        { CourseName: "NodeJS", Grade: "V.Good" },
    ],
});

// a) Loop through the Map and display each student's grades
console.log("Student Grades:");
for (let [studentName, data] of studentMap) {
    console.log(`Student: ${studentName}`);
    data.Grades.forEach((grade) => {
        console.log(`  Course: ${grade.CourseName}, Grade: ${grade.Grade}`);
    });
}

// b) Fill the dropdown list with student names
let dropdown = document.getElementById("students");
for (let studentName of studentMap.keys()) {
    let option = document.createElement("option");
    option.value = studentName;
    option.textContent = studentName;
    dropdown.appendChild(option);
}

// Event listener for dropdown selection
dropdown.addEventListener("change", function () {
    let selectedStudent = dropdown.value;
    let gradesList = document.getElementById("gradesList");
    gradesList.innerHTML = ""; // Clear previous grades

    if (selectedStudent) {
        let studentData = studentMap.get(selectedStudent);
        studentData.Grades.forEach((grade) => {
            let li = document.createElement("li");
            li.textContent = `Course: ${grade.CourseName}, Grade: ${grade.Grade}`;
            gradesList.appendChild(li);
        });
    }
});
