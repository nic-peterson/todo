export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
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
