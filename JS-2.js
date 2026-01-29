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

const studentName = document.querySelector("#student-name");
const button = document.querySelector(".btn");
const list=document.querySelector(".list");

button.addEventListener("click", () => {
    // Create an element
    const li = document.createElement("li");
    const name = studentName.value;
    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
    });
    
    li.textContent = name;
    li.appendChild(deleteButton);
    list.appendChild(li);
    studentName.value = "";
});