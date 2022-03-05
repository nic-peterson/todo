class Project {
  constructor(title="Inbox") {
    this.title = title;
    this.id = this.generateID(1, 1000000);
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

}

function addProject(body) {
  console.log("adding project!")
}

function projectForm() {
  const form = document.createElement("form");

}



export {Project, addProject}