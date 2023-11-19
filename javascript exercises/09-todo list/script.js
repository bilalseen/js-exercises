// script.js

let lowPriorityTodos = [];
let mediumPriorityTodos = [];
let highPriorityTodos = [];

let todoCounter = 0;

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
    todoBoxDOM.id = todoCounter;
    todoCounter++;
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
      const todoBoxId = todoBoxDOM.id;
      if (todoBoxDOM.classList == "low-priority-todo") {
        const indexToRemove = lowPriorityTodos.findIndex(
          (element) => element.id == todoBoxId
        );

        if (indexToRemove !== -1) {
          // Eğer index bulunmuşsa, diziden o index'teki öğeyi sil
          lowPriorityTodos.splice(indexToRemove, 1);
        }
      } else if (todoBoxDOM.classList == "medium-priority-todo") {
        const indexToRemove = mediumPriorityTodos.findIndex(
          (element) => element.id == todoBoxId
        );

        if (indexToRemove !== -1) {
          // Eğer index bulunmuşsa, diziden o index'teki öğeyi sil
          mediumPriorityTodos.splice(indexToRemove, 1);
        }
      } else if (todoBoxDOM.classList == "high-priority-todo") {
        const indexToRemove = highPriorityTodos.findIndex(
          (element) => element.id == todoBoxId
        );

        if (indexToRemove !== -1) {
          // Eğer index bulunmuşsa, diziden o index'teki öğeyi sil
          highPriorityTodos.splice(indexToRemove, 1);
        }
      }

      // todoListContainerDOM'dan todoBoxDOM'u kaldır
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

    document
      .querySelector(".low-priority-todo-button")
      .addEventListener("click", () => {
        clearTodoList();
        lowPriorityTodos.forEach((item) => {
          todoListContainerDOM.appendChild(item);
        });
      });

    document
      .querySelector(".medium-priority-todo-button")
      .addEventListener("click", () => {
        clearTodoList();
        mediumPriorityTodos.forEach((item) => {
          todoListContainerDOM.appendChild(item);
        });
      });

    document
      .querySelector(".high-priority-todo-button")
      .addEventListener("click", () => {
        clearTodoList();
        highPriorityTodos.forEach((item) => {
          todoListContainerDOM.appendChild(item);
        });
      });

    document
      .querySelector(".all-priority-todo-button")
      .addEventListener("click", () => {
        clearTodoList();
        highPriorityTodos.forEach((item) => {
          todoListContainerDOM.appendChild(item);
        });
        mediumPriorityTodos.forEach((item) => {
          todoListContainerDOM.appendChild(item);
        });
        lowPriorityTodos.forEach((item) => {
          todoListContainerDOM.appendChild(item);
        });
      });

    function clearTodoList() {
      const todoList = document.querySelector(".todo-list");

      if (todoList) {
        while (todoList.firstChild) {
          todoList.removeChild(todoList.firstChild);
        }
      }
    }
  } else {
    alert("Please enter todo");
  }
});

// Diğer kısımlarda herhangi bir değişiklik yapılmamıştır.
