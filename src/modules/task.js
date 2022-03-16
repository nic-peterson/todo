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

}

export { Task };
