import { add } from "date-fns";
import { createElt, addListener } from "./dom";
import Project from "./project";
import Task from "./task";
import {
  saveItem,
  retrieveAllItems,
  retrieveItem,
  removeItem,
  removeAllItems,
} from "./localStorage";

export default class UI {
  loadPage() {
    this.createHeader();
    this.createBody();
    this.createFooter();
  }

  createHeader() {
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

  createBody() {
    // Body => parent
    const body = document.createElement("div");
    body.className = "body";

    // Sidebar => child
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";

    // Sidebar children
    // First sidebar child
    const defaultProjectList = document.createElement("div");
    defaultProjectList.className = "default-project-list";

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
    // const inbox = document.createElement("button");
    // inbox.className = "button-default-project";
    // inbox.id = "button-inbox-projects";
    // inbox.innerHTML = `<p><span class="material-icons">
    // inbox
    // </span>Inbox</p>
    // `;
    // second sidebar grandchild

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
    // const today = document.createElement("button");
    // today.className = "button-default-project";
    // today.id = "button-today-projects";
    // today.innerHTML = `<p><span class="material-icons">
    // today
    // </span>Today</p>
    // `;

    // third sidebar grandchild

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

    // const week = document.createElement("button");
    // week.className = "button-default-project";
    // week.id = "button-week-projects";
    // week.innerHTML = `<p><span class="material-icons">
    // date_range
    // </span>Week</p>
    // `;

    // Appending sidebar grandchild
    //defaultProjectList.appendChild(inbox);
    //defaultProjectList.appendChild(today);
    //defaultProjectList.appendChild(week);
    sidebar.appendChild(defaultProjectList);

    // Appending second sidebar child
    const projectsTitle = document.createElement("div");
    projectsTitle.className = "projects-title";
    projectsTitle.textContent = "Projects";
    sidebar.appendChild(projectsTitle);

    // Appending third sidebar child
    const projectsList = document.createElement("div");
    //const addProject

    sidebar.appendChild(projectsList);

    // Apending fourth sidebar child
    this.createAddProjectButton(sidebar);

    // container => child
    const container = document.createElement("div");
    container.className = "container";
    container.id = "container";

    // container child
    const projectName = document.createElement("div");
    projectName.className = "project-name";
    projectName.id = "project-name";
    projectName.innerHTML = "<h1>Inbox</h1>";

    // container child
    const taskList = document.createElement("div");
    taskList.className = "task-list";
    taskList.id = "task-list";

    // container child
    //const addTaskBtn = this.createAddTaskButton();

    // appending container children
    container.appendChild(projectName);
    container.appendChild(taskList);
    this.createAddTaskButton(container);
    //container.appendChild(addTaskBtn);

    //Appending body children
    body.appendChild(sidebar);
    body.appendChild(container);
    document.body.appendChild(body);
  }

  createFooter() {
    const footer = document.createElement("div");
    footer.className = "footer";

    document.body.appendChild(footer);
  }

  createAddProjectButton(parentNode) {
    const addProjectBtn = createElt(
      parentNode,
      "button",
      "button-add-project",
      "button-add-project",
      `<p><span class="material-icons">
        add
      </span>Add Project</p>`
    );

    addListener(addProjectBtn, "click", () => {
      const project = new Project("project4");
      saveItem(project.id, project);
      retrieveItem(project.id);
    });
  }

  createAddTaskButton(parentNode) {
    const addTaskBtn = createElt(
      parentNode,
      "button",
      "button-add-task",
      "button-add-task",
      `<p><span class="material-icons">
    add
    </span>Add Task</p>`
    );

    addListener(addTaskBtn, "click", () => {
      const task = new Task("title", "desc", "dueDate", "priority");
      saveItem(task.id, task);
      retrieveItem(task.id);
    });
  }

  createNewProject(title) {
    const project = new Project(title);
    console.log(`project.title: ${project.title}`);
  }
}
