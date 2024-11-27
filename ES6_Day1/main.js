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
// d.“An arrow function does not create its own this context, unlike the normal literal function.” – Explain with demo.
// 2.Try for…in, for…of and .foreach() with an array.
// a.What’re the differences between for…in, for…of and .foreach().
// 3.Try spread operator with any array of your implementation.
// 4.Create Person class (Using ES6 syntax), that has name and age properties and show function that prints the name and age.
// a)Create static method whoAmI() that prints: “I am a person”
// 5.Create a Student class inherits from Person and contains: University, faculty, and final grade, and use print his data in the console using template literals in this format:
// {Std_name} is a student in faculty of {fac_name} in university {Uni_name}
// And his final grad is {grad}.
// a)Create static method whoAmI() that prints: “I am a student”
// 6.Create a mixin that has 2 functions: printName(), printAge().
// a)Use object.Assign() to add the previous mixin to the Student class.
// 7.Make a set that holds student names.
// a.Try to add repeated names, will the set accept it?
// b.Print the set values using spread operator and using for…of.
// 8.Make a Map that contains the student name as a key, and object that contains an array of his studied courses and his grade in each course. (The object structure as following: {Grades:[
// {Coursename:”JavaScript”, Grade:”Excellent”},
// {Coursename:”Jquery”, Grade:”Good”},
// {Coursename:”CSS”, Grade:”V.Good”}]}
// a.Loop in the Map and display each student along with his grades in all courses.
// b.Make a dropdownlist and fill it with the student names (from the Map), and when the user selects specific student display his grades in all courses.
