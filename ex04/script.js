const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCountDisplay = document.getElementById("task-count");

let totalTasks = 0;

function updateCounter() {
  taskCountDisplay.textContent = totalTasks;
}

function addTask() {
  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText + " ";

  li.addEventListener("click", function () {
    li.classList.toggle("completed-task");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
    totalTasks = totalTasks - 1;
    updateCounter();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  totalTasks = totalTasks + 1;
  updateCounter();
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
