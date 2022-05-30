const addTaskBtn = document.querySelector("#addTaskBtn");
const deleteAllBtn = document.querySelector("#deleteAllBtn");
const userInput = document.querySelector("#userInput");
const taskList = document.querySelector("#taskList");

userInput.addEventListener("change", createTasks);
addTaskBtn.addEventListener("click", createTasks);
deleteAllBtn.addEventListener("click", deleteAlLTasks);

function createTasks() {
  if (!userInput.value) {
    return;
  }
  const todo = document.createElement("li");
  const todoText = document.createElement("input");
  todoText.type = "text";
  todoText.value = userInput.value;
  todoText.readOnly = true;

  // Time and date
  // const createdAt = document.createElement("p")
  // const localTime = new Date().toLocaleString("en-GB")
  // createdAt.textContent = localTime

  // add class to todo, so I can use the node.forEach() method
  todo.classList.add("task");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", function () {
    if (todoText.readOnly) {
      todoText.readOnly = false;

      // change text and color
      editBtn.textContent = "Save";
      todoText.style.color = "red";
      editBtn.style.color = "red";
    } else {
      todoText.readOnly = true;
      todoText.textContent = todoText.value;

      // change text and color
      editBtn.textContent = "Edit";
      todoText.style.color = "black";
      editBtn.style.color = "black";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", function () {
    deleteBtn.parentElement.remove();
  });

  todo.append(checkBox, todoText, editBtn, deleteBtn);
  taskList.append(todo);

  console.log(todo);
  // Clear and move focus to input field
  userInput.value = "";
  userInput.focus();
}

function deleteAlLTasks() {
  const toDos = document.querySelectorAll(".task");
  toDos.forEach((element) => element.remove());
}
