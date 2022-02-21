import "./style.css";
import printMe from "./print.js";
import Task from "./modules/task";
import Project from "./modules/project";
import DOM from "./modules/dom";
import {
  saveItem,
  retrieveItem,
  retrieveAllItems,
  removeItem,
  removeAllItems,
  storageAvailable,
} from "./modules/localStorage";

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
const task2 = new Task("title2", "desc2", "dueDate2", "priority2");
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
console.log(`stringifyObject: ${task.stringifyObject()}`);

// * Testing creating a project
const project = new Project("title");

console.log(`addTask: ${project.addTask(5)}`);
console.log(`addTask: ${project.addTask("tasks")}`);
console.log(`addTask: ${project.addTask(task)}`);
console.log(`displayTitle: ${project.displayTitle()}`);
console.log(`displayTasks: ${project.displayTasks()}`);

console.log(`changeTitle: ${project.changeTitle("new title")}`);
console.log(`displayTitle: ${project.displayTitle()}`);
console.log(`displayTasks: ${project.displayTasks()}`);

console.log("remove");
project.removeTask(5);
//project.removeTask(task);
console.log("DISPLAY");
console.log(`displayTitle: ${project.displayTitle()}`);
console.log(`displayTasks: ${project.displayTasks()}`);

const project2 = new Project("second");
console.log(`addTask: ${project2.addTask(52)}`);
console.log(`addTask: ${project2.addTask("tasks2")}`);
console.log(`addTask: ${project2.addTask(task2)}`);
console.log(`displayTitle: ${project2.displayTitle()}`);
console.log(`displayTasks: ${project2.displayTasks()}`);

const testArr = project.tasks.concat(project2.tasks);
console.log(testArr);

const dom = new DOM("testId", "hello", "h1", "Hello World!");
const content = document.getElementById("content");
dom.createElt(content);

dom.addEventListener("click", () => {
  console.log("click");
});

saveItem(task.id, task.stringifyObject());
console.log(retrieveItem(task.id));
console.log(retrieveAllItems());

//content.appendChild(todoDiv);
