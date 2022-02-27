class Project {
  constructor(title) {
    this.title = title;
    this.id = this.generateID(1, 1000000);
    this.tasks = [];
    this.type = "project";
  }

  generateID(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  displayTitle() {
    return this.title;
  }

  addTask(task) {
    const result = this.tasks;
    result.push(task);
    this.tasks = result;
  }

  displayTasks() {
    return this.tasks;
  }

  removeTask(taskToRemove) {
    const result = this.tasks.filter((task) => task !== taskToRemove);
    this.tasks = result;
  }

}

function addProject() {
  console.log("adding project!")
}



export {Project, addProject}