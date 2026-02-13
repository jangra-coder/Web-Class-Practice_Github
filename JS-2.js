// const para=document.querySelectorAll(".para") //returns NodeList
// // para[0].textContent="This is updated one"
// // para[1].style.color="blue"
// console.log(para)

// // .inner tag
// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a new heading.</h1>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")

// function show(){
//     alert("Button clicked!");
//     button.classList.toggle("btn");
//     button.classList.toggle("btn2");
// }

// button.addEventListener('click', show);

// // Click and stop button

// function stop() {
//     clickbutton.removeEventListener("click", click_);
//     clickbutton.classList.remove("btn");
// }

// function click_(){
//     clickbutton.classList.add("btn");
//     alert("Button clicked!");
// }
// function reset_(){
//     clickbutton.classList.add("btn");
//     clickbutton.addEventListener("click", click_);
// }
// // stop button
// const stopButton = document.querySelector(".stop-button");
// stopButton.classList.add("btn2");
// stopButton.addEventListener("click",stop)
// // click button
// const clickbutton=document.querySelector(".click-button");
// clickbutton.classList.add("btn");
// clickbutton.addEventListener("click", click_);
// // reset button
// const reset = document.querySelector(".reset-button");
// reset.classList.add("resetbutton");
// reset.addEventListener("click", reset_);


// // Event
// const event_btn = document.querySelector(".event-button");
// event_btn.addEventListener("click", () => {
//     console.log(event_btn);
// });

// event_btn.addEventListener("keyup", (event) => {
//     console.log(event.key);
// });

// form
// const form = document.querySelector("form");
// form.addEventListener("submit-button", (event) => {
//     event.preventDefault();
//     console.log("Form submitted");
// });

// const studentName = document.querySelector("#student-name");
// const button = document.querySelector(".btn");
// const list=document.querySelector(".list");

// button.addEventListener("click", () => {
//     // Create an element
//     const li = document.createElement("li");
//     const name = studentName.value;
//     // Create a delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//         list.removeChild(li);
//     });
    
//     li.textContent = name;
//     li.appendChild(deleteButton);
//     list.appendChild(li);
//     studentName.value = "";
// });

// // call back function
// function call_2(){
//     console.log("Goodbye");
// }
// function greet(call_2){
//     setTimeout(() => {
//         console.log("Hello");
//         call_2();
//     }, 1000);
// }
// greet(call_2);

// // Callback hell : Nested call backs in a function
// console.log("Start");
// setTimeout(() => {
//     console.log("Homework Done ...");
//     console.log("Starting dinner ....");
//     setTimeout(() => {
//         console.log("Dinner Done!");
//         console.log("Getting ready to go out");
//         setTimeout(() => {
//             console.log("Going to the playground !");
//         }, 1000); // after dinner
//     }, 1500); //dinner time
// }, 2000); //homework time

// // handling callback hell
// function finishHomework(callback){
//     setTimeout(() => {
//         console.log("Homework Done ...");
//         callback();
//     }, 2000);
// }

// function startDinner(callback){
//     setTimeout(() => {
//         console.log("Starting dinner ....");
//         callback();
//     }, 1500);
// }

// function goOut(){
//     setTimeout(() => {
//         console.log("Going to the playground !");
//     }, 1000);
// }

// finishHomework(() => {
//     startDinner(() => {
//         goOut();
//     });
// });

// // Promises
// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done =true;
//             if(done){
//                 console.log("Homework Complete")
//                 res("Homework Done!!");
//             }else{
//                 rej("Homework Not Done");
//             }
//         }, 2000);
//     });
//     return p;
// }
// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done =true;
//             if(done){
//                 console.log("Dinner Complete")
//                 res("Dinner Done!!");
//             }else{
//                 rej("Dinner Not Done");
//             }
//         }, 1500);
//     });
//     return p;
// }

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done =true;
//             if(done){
//                 console.log("Homework Complete")
//                 res("Homework Done!!");
//             }else{
//                 rej("Homework Not Done");
//             }
//         }, 2000);
//     });
//     return p;
// }

// doHomework().then((data)=>{
//     console.log(data);
//     return eatDinner();
// }).then((data)=>{
//     console.log(data);
//     return goToPlayground()
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Go to sleep");
// });

// // Async function and await
// async function orderFood(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("Food Ordered");
//             res()
//             }, 2000);
//     });
// }

// function prepareFood(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("Food Prepared");
//             res()
//         }, 2000);
//     });
// }

// function deliverFood(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("Food Delivered");
//             res()
//         }, 1500);
//     });
// }

// async function foodOrder(){
//     await orderFood()
//     await prepareFood()
//     await deliverFood()
//     console.log("Food is ready to be served");
// }
// foodOrder();

console.log("Its the first Time")

try{
    let age =19;
    if(age<18){
        throw new Error("Not Eligible");
    }
    let sample;
    for (let i=0; i<10; i++){
        sample = i;
    }
    // console.log("Eligible");
}catch(err){
    console.log(err)
    throw new Error("Something Went Wrong");
}finally{
    console.log("Finally Block ");
}
console.log("Its the Last Line")

async function getData(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(response.ok);
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        data.products.forEach(product => {
            console.log(product.title);
        });
    }catch(err){
        console.log(err);
    }
}
getData();