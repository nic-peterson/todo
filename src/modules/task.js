import { createElt, returnNodeById } from "./domFunctions";

class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = this.generateID(1, 1000000);
    this.complete = false;
    this.type = "task";
    this.project = project;
  }

  generateID(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  isComplete() {
    return this.complete;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  changeDescrption(newDesc) {
    this.description = newDesc;
  }

  changeDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }

  changeProject(newProject) {
    this.project = newProject;
  }
}

export { Task };
