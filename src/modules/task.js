export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = this.generateID(1, 1000000);
    this.complete = false;
  }

  generateID(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  isComplete() {
    return this.complete;
  }

  toggleComplete() {
    return (this.complete = !this.complete);
  }

  changeTitle(input) {
    return (this.title = input);
  }

  changeDescrption(input) {
    return (this.description = input);
  }

  changeDueDate(input) {
    return (this.dueDate = input);
  }

  changePriority(input) {
    return (this.priority = input);
  }
  
}


