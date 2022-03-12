import {
  createElt,
  addListener,
  returnNodeById,
  clear,
  render,
} from "./domFunctions";
import {
  Project,
  addProject,
  cancelAddProject,
  submitProject,
  deleteProject,
  editProject,
} from "./project";
import { Logic } from "./logic";
import { retrieveAllItemsByType, retrieveItem, saveItem } from "./localStorage";

const logic = new Logic();

const initialLoad = function () {
  header();
  body();
  footer();
};

function header() {
  const header = createElt(document.body, "div", "header", "header", "");
  const logo = createElt(
    header,
    "div",
    "logo",
    "logo",
    `<p><span class="material-icons">
    done_all
    </span>ToDo!</p>`
  );
}

function body() {
  const body = createElt(document.body, "div", "body", "body", "");
  sidebar(body);
  container(body);
}

function sidebar(body) {
  const sidebar = createElt(body, "div", "sidebar", "sidebar", "");
  projects(sidebar);
}

function projects(sidebar) {
  const defaultProjectList = createElt(
    sidebar,
    "div",
    "default-project-list",
    "default-project-list",
    ""
  );
  const inbox = createElt(
    defaultProjectList,
    "button",
    "button-default-project",
    "button-inbox-projects",
    `<p><span class="material-icons">
      inbox
      </span>Inbox</p>
      `
  );
  const today = createElt(
    defaultProjectList,
    "button",
    "button-default-project",
    "button-today-project",
    `<p><span class="material-icons">
  today
  </span>Today</p>
  `
  );
  const week = createElt(
    defaultProjectList,
    "button",
    "button-default-project",
    "button-week-projects",
    `<p><span class="material-icons">
  date_range
  </span>Week</p>
  `
  );

  const projectsTitle = createElt(
    sidebar,
    "div",
    "projects-title",
    "projects-title",
    "Projects"
  );

  const projectList = createElt(
    sidebar,
    "div",
    "projects-list",
    "projects-list",
    ""
  );

  const popuplateProjectList = () => {
    const projectArr = retrieveAllItemsByType("project");
    projectArr.forEach((project) => {
      if (project.title !== "Inbox") {
        createElt(
          projectList,
          "div",
          "project-item",
          `project-item-${project.id}`,
          `<div class="project-item-icon-and-name">
          <span class="material-icons">
            list
          </span>
          ${project.title} 
          </div>
          <div class="project-item-edit-and-delete" id="project-item-edit-and-delete-${project.id}">
          <div class="project-item-edit" id="project-item-edit-${project.id}">
            <span class="material-icons">
              edit
            </span>
          </div>
          <div class="project-item-delete" id="project-item-delete-${project.id}">
            <span class="material-icons">
              close
            </span>
          </div>
          </div>
          `
        );

        addListener(
          returnNodeById(`project-item-edit-${project.id}`),
          "click",
          () => {
            const projectItem = returnNodeById(`project-item-${project.id}`);
            clear(projectItem);
            const input = createElt(
              projectItem,
              "input",
              "input-edit-project",
              `input-edit-project-${project.id}`,
              ""
            );
            input.onblur = inputBlur;

            function inputBlur() {
              project.title = input.value;
              saveItem(project.id, project);
              logic.setLiveProject(project.title);
              clear(returnNodeById("sidebar"));
              projects(returnNodeById("sidebar"));
              clear(returnNodeById("container"));
              container(returnNodeById("body"));
            }
          }
        );
        addListener(
          returnNodeById(`project-item-delete-${project.id}`),
          "click",
          () => {
            deleteProject(retrieveItem(project.id));
            logic.setLiveProject("Inbox");
            clear(returnNodeById("sidebar"));
            projects(returnNodeById("sidebar"));
          }
        );
      }
    });
  };

  popuplateProjectList();

  const addProjectBtn = createElt(
    sidebar,
    "button",
    "button-add-project",
    "button-add-project",
    `<p><span class="material-icons">
      add
    </span>Add Project</p>`
  );

  function addProjectPopUp() {
    createElt(
      sidebar,
      "div",
      "add-project-popup",
      "add-project-popup",
      `<input class="input-add-project-popup" id="input-add-project-popup" type="text">
      <div class="add-project-popup-buttons">
        <button class="button-project-popup-add button-project-popup" id="button-project-popup-add">
          Add
        </button>
        <button class="button-project-popup-cancel button-project-popup" id="button-project-popup-cancel">
          Cancel
        </button>
      </div>`
    );
  }

  addProjectPopUp();

  addListener(inbox, "click", () => {
    logic.setLiveProject("Inbox");
    clear(returnNodeById("container"));
    container(returnNodeById("body"));
  });
  addListener(today, "click", () => {
    logic.setLiveProject("Today");
    clear(returnNodeById("container"));
    container(returnNodeById("body"));
  });
  addListener(week, "click", () => {
    logic.setLiveProject("Week");
    clear(returnNodeById("container"));
    container(returnNodeById("body"));
  });
  addListener(addProjectBtn, "click", addProject);
  addListener(
    returnNodeById("button-project-popup-cancel"),
    "click",
    cancelAddProject
  );
  addListener(returnNodeById("button-project-popup-add"), "click", () => {
    const newProject = returnNodeById("input-add-project-popup").value;
    submitProject(newProject);
    logic.setLiveProject(newProject);
    clear(returnNodeById("sidebar"));
    projects(returnNodeById("sidebar"));
    clear(returnNodeById("container"));
    container(returnNodeById("body"));
  });
}

function container(body) {
  if (!returnNodeById("container")) {
    const container = createElt(body, "div", "container", "container", "");
  }
  const projectname = createElt(
    returnNodeById("container"),
    "div",
    "project-name",
    "project-name",
    `<h1>${logic.returnProject().title}</h1>`
  );
  const taskList = createElt(
    returnNodeById("container"),
    "div",
    "task-list",
    "task-list",
    ""
  );

  const addTaskBtn = createElt(
    returnNodeById("container"),
    "button",
    "button-add-task",
    "button-add-task",
    `<p><span class="material-icons">
  add
  </span>Add Task</p>`
  );

  function taskModal() {
    const modal = createElt(
      returnNodeById("container"),
      "div",
      "add-task-modal",
      "add-task-modal",
      ""
    );
    // create modalHeader
    const modalHeader = createElt(
      modal,
      "div",
      "add-task-modal-header",
      "add-task-modal-header",
      `
      <h5 class="add-task-modal-title" id="add-task-model-Title">New Task</h5>
      <button type="button" class="close" id="add-task-modal-close" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      `
    );
    // create modalBody
    const modalBody = createElt(
      modal,
      "div",
      "add-task-modal-body",
      "add-task-modal-body",
      `<form>
        <div class="add-task-modal-title-desc">
          <div class="add-task-modal-title">
            <label for="title">Title:</label><br>
            <input type="text" id="add-task-input-title" name="title"><br>
          </div>
          <div class="add-task-modal-desc">
            <label for="desc">Description:</label><br>
            <input type="text" id="add-task-input-desc" name"desc"><br>
          </div>
        </div>
        <div class="add-task-modal-other-info" id="add-task-modal-other-info">
          <div class="add-task-modal-due-date">
            <label for="due-date">Due Date:</label><br>
            <input 
              type="datetime-local" 
              id="add-task-modal-due-date" 
              name="due-date"
              value=${new Date()}
            >
          </div>
          <div class="add-task-modal-priority">
            <label for="priority">Priority:</label><br>
            <select name="priority id="add-task-modal-priority-selector">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </form>`
    );

    const modalFooter = createElt(
      modal,
      "div",
      "add-task-modal-footer",
      "add-task-modal-footer",
      `
      <button 
        class="add-task-modal-close-btn"
        id="add-task-modal-close-btn"
        >
        Close
      </button>
      <button 
        class="add-task-modal-add-btn"
        id="add-task-modal-add-btn"
        >
        Add Task
      </button>
      `
    );
    document
      .getElementById("add-task-modal-close")
      .addEventListener("click", clearTaskModal);
    document
      .getElementById("add-task-modal-close-btn")
      .addEventListener("click", clearTaskModal);
  }

  function clearTaskModal() {
    clear(returnNodeById("container"));
    container();
  }

  document.getElementById("button-add-task").addEventListener("click", () => {
    taskModal();
  });
}

function footer() {
  const footer = createElt(document.body, "div", "footer", "footer", "");
}

export { initialLoad };
