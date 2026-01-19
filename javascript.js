console.log("Hello, World!");
// let name="Rahul";
// const cla="B.Tech";
// console.log("Name:",name)
// console.log("Class:",cla)
// name="Amit";
// cla="M.Tech"; // This will throw an error because 'cla' is a constant

// console.log("Name:", name);
// console.log("Class:", cla);

// // primitative data types in js:
// // array
// // object
// // function

// // array in js
// let lst=[1,2,3,4,5];
// // object in javascript
// let student={
//     name:"Rahul",
//     age:21,
//     cla:"B.Tech"
// }
// two ways to access object properties
// console.log(student.age)
// console.log(student["name"])
// // to call for array in js
// console.log(lst[2]);

// function in js
// function add(a,b){
//     return a+b;
// }
// let result=add(5,10);
// console.log("Addition:",result);

// //conditional statements in js
// let age=18;
// if(age<18){
//     console.log("Minor");
// }
// else if(age===18){
//     console.log("Just became an adult");
// }
// else{
//     console.log("Adult");
// }

// // switches in js
// let day=3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // loops in js
// // for loop
// let i;
// for(i=0;i<5;i++){
//     console.log("For Loop i:",i*2);
// }
// // Checking value of i after the loop
// console.log("Value of i after loop:",i);

// // While loop
// let j=0;
// while(j<5){
//     console.log("While Loop j:",j*3);
//     j++;
// }
// // Checking value of j after the loop
// console.log("Value of j after loop:",j);

// let str="Hello, JavaScript!";
// let i=0;
// while(str[0]){
//     if(str[i]=="v"){
//         break;
//     }
//     console.log(str[i]);
//     i++;
// }
// console.log("Loop ended. Value of i:",i);

// function
function multiply(x,y){
    return x*y;
}
let output=multiply(4,5);
console.log("Multiplication:",output);