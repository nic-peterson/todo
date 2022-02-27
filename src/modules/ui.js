import { createElt, addListener, returnNodeById } from "./domFunctions";
import { Project, addProject } from "./project";

const initialLoad = function () {
  header();
  body();
  footer();
};

const header = () => {
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
};

const body = () => {
  const body = createElt(document.body, "div", "body", "body", "");
  sidebar(body);
  container(body);
};

const sidebar = (body) => {
  const sidebar = createElt(body, "div", "sidebar", "sidebar", "");
  projects(sidebar);
};

const projects = (sidebar) => {
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

  addListener(addProjectBtn, "click", addProject);
};

const container = (body) => {
  const container = createElt(body, "div", "container", "container", "");
  const projectname = createElt(
    container,
    "div",
    "project-name",
    "project-name",
    "<h1>Inbox</h1>"
  );
  const taskList = createElt(container, "div", "task-list", "task-list", "");
  const addTaskBtn = createElt(
    container,
    "button",
    "button-add-task",
    "button-add-task",
    `<p><span class="material-icons">
  add
  </span>Add Task</p>`
  );
};

const footer = () => {
  const footer = createElt(document.body, "div", "footer", "footer", "");
};

export { initialLoad };
