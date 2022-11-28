"use strict";

const form = document.querySelector("#js_form");
const userInput = document.querySelector("#js_input");
const listElement = document.querySelector("#tasks");
const tips = document.querySelector(".tips");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  const task = userInput.value;
  if(!task) {
    tips.innerHTML = "Demasiado alto."; 
    return;
  }

const taskElement = document.createElement("div");
taskElement.classList.add("task_element");

const taskContentElement = document.createElement("div");
taskContentElement.classList.add("task_Content_Element");

taskElement.appendChild(taskContentElement);

const taskInputElement = document.createElement("input");
taskInputElement.classList.add("text");
taskInputElement.type = "text";
taskInputElement.value = task;
taskInputElement.setAttribute("readonly", "readonly");

taskContentElement.appendChild(taskInputElement);

const taskActions = document.createElement("div");
taskActions.classList.add("actions");

const btnEdit = document.createElement("button");
btnEdit.classList.add("edit");
btnEdit.innerHTML= "Edit";

const btnDelete = document.createElement("button");
btnDelete.classList.add("delete");
btnDelete.innerHTML = "Delete";

taskActions.appendChild(btnEdit);
taskActions.appendChild(btnDelete);
taskElement.appendChild(taskActions);

listElement.appendChild(taskElement);

userInput.value = "";

btnEdit.addEventListener("click", () => {
    if(btnEdit.innerText.toLowerCase() == "edit") {
    taskInputElement.removeAttribute("readonly");
    taskInputElement.focus();
    btnEdit.innerText= "Save";
    } else {
        taskInputElement.setAttribute("readonly", "readonly");  
        btnEdit.innerText= "Edit";
    }
});

btnDelete.addEventListener("click", () => {
    listElement.removeChild(taskElement);
});

userInput.focus();
});