import "./style.css";
import printMe from "./print.js";
import { TodoItem } from "./modules/todoItem";

/*
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
*/
//content.appendChild(component());

const todo = new TodoItem("title", "desc", "dueDate", "priority");
const todoDiv = document.createElement("div");
for (const key in todo) {
  if (Object.hasOwnProperty.call(todo, key)) {
    const element = todo[key];
    todoDiv.textContent += ` ${element}`;    
  }
}


const content = document.getElementById("content");
content.appendChild(todoDiv);


