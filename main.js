console.log("Hello!!");

let text = document.querySelector(".textbox").value;
console.log(text);

//create function which will add the value of input text to page when the button is clicked, and add function to our event listener
/* function addToList() {
  //select text - assign it a variable
  let textbox = document.querySelector(".textbox");
  //we create a new elements list (called li)
  let toDoList = document.createElement("li");
  // assign textbox value to innertext of li
  toDoList.innertext = textbox.value;
  //we select ul already existing in index.html and append li to ul
  let ul = document.querySelector(".ul");
  ul.appendChild(toDoList);
  //(so when button is clicked, we want whatever the user inputted into the text field to be added into the to-do list on the webpage)
} */

/* //select button
let button = document.querySelector(".bttn");
//add event listener to button
button.addEventListener("click", addToList());
 */
