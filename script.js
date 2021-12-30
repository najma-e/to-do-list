console.log("Hello!!");

/* document.querySelector(".textbox").value = "hello there";
console.log(document.querySelector(".textbox").value); */

let button = document.querySelector(".bttn");

function addToList() {
  let input = document.querySelector(".textbox");
  /* let inputText = input.value; */
  /* if (text === " ") {
    return alert("please enter something");
  } */
  /* console.log(text); */
  // create new element list
  let list = document.createElement("li");
  list.classList.add("myList");
  // select ul elemnent
  let orderedList = document.querySelector("ol");
  //make the inner text of list element the value of our textbox
  if (input.value === "" || input.value === " ") {
    alert("Insert something into box");
  } else {
    list.innerText = input.value;
    orderedList.appendChild(list);
  }
}

button.addEventListener("click", addToList);
