import "./style.css";
import printMe from "./print.js";
import Task from "./modules/task";
import Project from "./modules/project";

/*

* boilerplate stuff -- composition reference
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = `Hello World!`;
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
content.appendChild(component());
*/

// * Checking to make sure that todo object is accessible
const task = new Task("title", "desc", "dueDate", "priority");
/*
const todoDiv = document.createElement("div");
for (const key in todo) {
  if (Object.hasOwnProperty.call(todo, key)) {
    const element = todo[key];
    todoDiv.textContent += ` ${element}`;    
  }
}
*/

console.log(task);
console.log(task.isComplete());
console.log(task.toggleComplete());
console.log(task);

console.log("begin changes!");
console.log(task.changeTitle("new title"));
console.log(task.changeDescrption("new desc"));
console.log(task.changeDueDate("new due date"));
console.log(task.changePriority("new priority"));

console.log(task);

// * Testing creating a project
const project = new Project("title");

console.log(`addTask: ${project.addTask(5)}`);
console.log(`addTask: ${project.addTask("tasks")}`);
console.log(`addTask: ${project.addTask(task)}`);
console.log(`displayTitle: ${project.displayTitle()}`)
console.log(`displayTasks: ${project.displayTasks()}`);

console.log(`changeTitle: ${project.changeTitle("new title")}`);
console.log(`displayTitle: ${project.displayTitle()}`)
console.log(`displayTasks: ${project.displayTasks()}`);

console.log("remove");
project.removeTask(5);
project.removeTask(task);
console.log("DISPLAY");
console.log(`displayTitle: ${project.displayTitle()}`)
console.log(`displayTasks: ${project.displayTasks()}`);

const content = document.getElementById("content");
//content.appendChild(todoDiv);
