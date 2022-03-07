import { createElt, returnNodeById } from "./domFunctions";
import { saveItem, doesItemExist, searchItem } from "./localStorage";

class Project {
  constructor(title = "Inbox") {
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

// Function is triggered when a user clicks the add project button
function addProject() {
  // toggle add project button visibility (invisible)
  const addProjectBtn = returnNodeById("button-add-project");
  addProjectBtn.style.display = "none";

  // toggle add project form input visiblity (visible)
  const popUpDiv = returnNodeById("add-project-popup");
  popUpDiv.classList.remove("add-project-popup");
  popUpDiv.classList.add("add-project-popup-active");
}

// function is triggered when a user press the cancel button
// after clicking add project
function cancelAddProject() {
  // toggle add project button visiblity (visible)
  const addProjectBtn = returnNodeById("button-add-project");
  addProjectBtn.style.display = "block";

  // reset form
  const input = returnNodeById("input-add-project-popup");
  input.value = "";

  // toggle add project form input visbility (invisible)
  const popUpDiv = returnNodeById("add-project-popup");
  popUpDiv.classList.remove("add-project-popup-active");
  popUpDiv.classList.add("add-project-popup");
}

// function creates a submits the user-generated project
// from the form
function submitProject(title) {
  if (doesItemExist(title)) {
    return;
  } else {
    const newProject = new Project(title);
    saveItem(newProject.id, newProject);
  }
}

export { Project, addProject, cancelAddProject, submitProject };
