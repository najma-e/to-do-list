console.log("Hello!!");

/* document.querySelector(".textbox").value = "hello there";
console.log(document.querySelector(".textbox").value); */

let button = document.querySelector(".btn");
let input = document.querySelector(".textbox");
// create new element list
let list = document.createElement("li");
// select ol elemnent
let orderedList = document.querySelector("ol");
//create delete button which will be appended to each list item
let deleteBtn = document.createElement("button");

//add event listener to our add to list button
button.addEventListener("click", function (event) {
  //create a new class for list element
  list.classList.add("myList");
  //if nothing is typed into textbox. have an alert pop up
  if (input.value === "" || input.value === " ") {
    alert("Please insert something into textbox!");
  } else {
    //make the inner text of list element the value of our textbox
    //append li to our existing ol
    list.innerText = input.value;
    orderedList.appendChild(list);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "x";
    list.appendChild(deleteBtn);
    //makes sure that any input has no strkethrough initially
    list.style.textDecoration = "none";
    //textbox is automatically reset/cleared when button is clicked
    input.value = null;
  }
});

//add event listener that shows input.value onto page when the enter key is pressed
input.addEventListener("keyup", function (event) {
  //Number 13 is the number of the enter key on the keyboard
  if (event.keyCode === 13) {
    document.querySelector(".btn").click();
  }
});

//function which deletes an item off off the to-do list when delete button is clicked

deleteBtn.addEventListener("click", function (event) {
  orderedList.removeChild(list);
});

//when li element is clicked, the element is crossed through
list.addEventListener("click", function (event) {
  if (list.style.textDecoration != "line-through") {
    list.style.textDecoration = "line-through";
  } else {
    list.style.textDecoration = "none";
  }
});

/* let ol = document.querySelector(".ol");
let allList = ul.children;

function createDeleteBtn(li) {
  let remove = document.createElement("button");
  let deleteBtn = remove.className(".delete-btn");
  ol.appendChild(deleteBtn);
}
for(let i = 0; i < allList.length; i++) {
  createDeleteBtn(allList[i]);
} */
/* let deleteBtn = document.createElement("button");
let ol = document.querySelector(".ol");
let allList = document.querySelectorAll("li");

for (let i = 0; i < allList.length; i++) {
  allList[i].deleteBtn.addEventListener("click", function(event) {
    this.closest("li").remove(); */

/* deleteBtn.addEventListener("click", function (event) {
  let target = event.target;
  if (target.type.tagName === "Button") {
    target.closest("li").remove();
  }
  return false;
}); 

/* document.querySelector(".myList").removeChild(node); */
/* deleteBtn.parentNode.remove(); */
/* let itemToRemove = document.querySelector(".myList");
  ul.parentNode.removeChild(itemToRemove); */
