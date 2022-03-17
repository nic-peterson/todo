/* eslint-disable no-param-reassign */
import { returnNodeById } from '../helperFunctions/domFunctions';
import generateID from '../helperFunctions/classFunctions';
import {
  saveItem,
  doesProjectExist,
  retrieveAllItemsByType,
  removeItem,
} from '../helperFunctions/localStorage';

class Project {
  constructor(title = 'Inbox') {
    this.title = title;
    this.id = generateID(1, 1000000);
    this.type = 'project';
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
  const addProjectBtn = returnNodeById('button-add-project');
  addProjectBtn.style.display = 'none';

  // toggle add project form input visiblity (visible)
  const popUpDiv = returnNodeById('add-project-popup');
  popUpDiv.classList.remove('add-project-popup');
  popUpDiv.classList.add('add-project-popup-active');
}

// function is triggered when a user press the cancel button
// after clicking add project
function cancelAddProject() {
  // toggle add project button visiblity (visible)
  const addProjectBtn = returnNodeById('button-add-project');
  addProjectBtn.style.display = 'block';

  // reset form
  const input = returnNodeById('input-add-project-popup');
  input.value = '';

  // toggle add project form input visbility (invisible)
  const popUpDiv = returnNodeById('add-project-popup');
  popUpDiv.classList.remove('add-project-popup-active');
  popUpDiv.classList.add('add-project-popup');
}

// function submits the user-generated project
// from the form
function submitProject(title) {
  if (!doesProjectExist(title)) {
    const newProject = new Project(title);
    saveItem(newProject.id, newProject);
  }
}

// Update existing project
// function updateProject(project, newTitle) {
//   const lsTaskArr = retrieveAllItemsByType('task');
//   lsTaskArr.forEach((obj) => {
//     if (obj.project === project.title) {
//       obj.project = newTitle;
//       saveItem(obj.id, obj);
//     }
//   });
//   project.title = newTitle;
//   saveItem(project.id, project);
// }

// Delete existing project
function deleteProject(project) {
  const lsTaskArr = retrieveAllItemsByType('task');
  lsTaskArr.forEach((obj) => {
    if (obj.project === project.title) {
      obj.project = 'Inbox';
      saveItem(obj.id, obj);
    }
  });

  removeItem(project.id);
}

export {
  Project,
  addProject,
  cancelAddProject,
  submitProject,
  deleteProject,
};
