console.log("Hello!!");

/* document.querySelector(".textbox").value = "hello there";
console.log(document.querySelector(".textbox").value); */

//initialise and assign varibales to elements
let addItemButton = document.querySelector(".btn");
let input = document.querySelector(".textbox");
let orderedList = document.querySelector("ol");

function createToDoList() {
  let inputLength = input.value.length;
  // create new list item
  let listItem = document.createElement("li");
  //create a new class for list item
  listItem.classList.add("myList");
  //make the inner text of list item the value of our textbox
  listItem.innerText = input.value;
  //append li to our existing ol
  if (inputLength === 0) {
    alert("Please insert something into textbox!");
  } else {
    orderedList.appendChild(listItem);
  }

  //create delete button which will be appended to each list item
  let deleteItemButton = document.createElement("button");
  deleteItemButton.classList.add("delete-btn");
  deleteItemButton.innerText = "x";
  listItem
    .appendChild(deleteItemButton)
    .addEventListener("click", function (event) {
      let li = event.target.closest("li");
      li.parentElement.removeChild(li);
    });

  listItem.style.textDecoration = "none";
  input.value = null;

  //when li element is clicked, the element is crossed through
  listItem.addEventListener("click", function (event) {
    if (listItem.style.textDecoration != "line-through") {
      listItem.style.textDecoration = "line-through";
      listItem.style.backgroundColor = "#B2AC88";
    } else {
      listItem.style.textDecoration = "none";
      listItem.style.backgroundColor = "rgb(162, 218, 253, 0.45)";
    }
  });
}

addItemButton.addEventListener("click", createToDoList);

//add event listener that shows input.value onto page when the enter key is pressed
input.addEventListener("keyup", function (event) {
  //Number 13 is the number of the enter key on the keyboard
  if (event.keyCode === 13) {
    document.querySelector(".btn").click();
  }
});

//api fetch request to get inspiring quotes to put on page above to-do list

/* async function fetchQuotes() {
  let response = await fetch("https://quotes.rest/qod?category=inspire");
  let data = await response.json();
  console.log(data.contents.quotes[0]);
  //select header which quote will be a part of and make quote the inner text of element
  let quote = document.getElementById("quote");
  quote.innerText = data.contents.quotes[0].quote;
  //select header which author will be a part of and make author the inner text of element
  let author = document.getElementById("author");
  author.innerText = data.contents.quotes[0].author;
}

fetchQuotes(); */

/////////////////////////////////////////////////////////////////////////////////////
