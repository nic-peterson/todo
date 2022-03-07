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
} from "./project";
import { Logic } from "./logic";

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

  const addProjectBtn = createElt(
    sidebar,
    "button",
    "button-add-project",
    "button-add-project",
    `<p><span class="material-icons">
      add
    </span>Add Project</p>`
  );

  const addProjectPopUp = createElt(
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

  console.log(addProjectPopUp);

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
    console.log(newProject);
    submitProject(newProject);
    logic.setLiveProject(newProject);
    clear(returnNodeById("sidebar"));
    projects(returnNodeById("sidebar"));
  });
  /*
  () => {
    const addProjectBtn = returnNodeById("button-add-project");
    addProjectBtn.style.display = "block";

    const input = returnNodeById("input-add-project-popup");
    input.value = "";

    const popUpDiv = returnNodeById("add-project-popup");
    popUpDiv.classList.remove("add-project-popup-active");
    popUpDiv.classList.add("add-project-popup");
  }
   */
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
}

function footer() {
  const footer = createElt(document.body, "div", "footer", "footer", "");
}

export { initialLoad };
