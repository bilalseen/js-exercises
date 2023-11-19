// script.js

let lowPriorityTodos = [];
let mediumPriorityTodos = [];
let highPriorityTodos = [];

document.querySelector(".submit-button").addEventListener("click", (e) => {
  e.preventDefault();

  let userInput = document.querySelector(".user-input");

  if (userInput.value !== "") {
    let todoListContainerDOM = document.querySelector(".todo-list");

    let todoTextDOM = document.createElement("span");
    todoTextDOM.classList.add("todo-text");
    todoTextDOM.innerHTML = userInput.value;

    let todoDeleteButtonDOM = document.createElement("button");
    todoDeleteButtonDOM.classList.add("delete-button");
    todoDeleteButtonDOM.innerHTML = "Delete";

    let todoBoxDOM = document.createElement("div");
    let highPriorityButtonDOM = document.querySelector(
      ".high-priority-choice-button"
    );
    let mediumPriorityButtonDOM = document.querySelector(
      ".medium-priority-choice-button"
    );
    let lowPriorityButtonDOM = document.querySelector(
      ".low-priority-choice-button"
    );

    if (lowPriorityButtonDOM.checked) {
      todoBoxDOM.classList.add("low-priority-todo");
      lowPriorityButtonDOM.checked = false;
    } else if (mediumPriorityButtonDOM.checked) {
      todoBoxDOM.classList.add("medium-priority-todo");
      mediumPriorityButtonDOM.checked = false;
    } else if (highPriorityButtonDOM.checked) {
      todoBoxDOM.classList.add("high-priority-todo");
      highPriorityButtonDOM.checked = false;
    } else {
      alert("Please select priority level");
      return;
    }

    todoBoxDOM.appendChild(todoTextDOM);
    todoBoxDOM.appendChild(todoDeleteButtonDOM);

    // Delete button click event listener
    todoDeleteButtonDOM.addEventListener("click", () => {
      todoListContainerDOM.removeChild(todoBoxDOM);
    });

    if (todoBoxDOM.classList == "high-priority-todo") {
      highPriorityTodos.push(todoBoxDOM);
    } else if (todoBoxDOM.classList == "medium-priority-todo") {
      mediumPriorityTodos.push(todoBoxDOM);
    } else if (todoBoxDOM.classList == "low-priority-todo") {
      lowPriorityTodos.push(todoBoxDOM);
    }

    todoListContainerDOM.appendChild(todoBoxDOM);
    userInput.value = "";
  } else {
    alert("Please enter todo");
  }
});

// Diğer kısımlarda herhangi bir değişiklik yapılmamıştır.
