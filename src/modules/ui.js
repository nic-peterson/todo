import { createElt } from "./dom";

export default class UI {
  loadPage() {
    this.createHeader();
    this.createBody();
    this.createFooter();
  }

  createHeader() {
    const header = document.createElement("div");
    header.className = "header";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.id = "logo";
    logo.innerHTML = `<span class="material-icons">
    done_all
    </span>ToDo!`;

    header.appendChild(logo);
    document.body.appendChild(header);
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

    // first sidebar grandchild
    // const inbox = createElt(
    //   defaultProjectList,
    //   "button",
    //   "button-default-project active",
    //   "button-inbox-projects",
    //   `<span class="material-icons">
    // inbox
    // </span>Inbox
    // `
    // );
    const inbox = document.createElement("button");
    inbox.class = "button-default-project active";
    inbox.id = "button-inbox-projects";
    inbox.innerHTML = `<span class="material-icons">
    inbox
    </span>Inbox
    `;
    // second sidebar grandchild
    const today = document.createElement("button");
    today.class = "button-default-project active";
    today.id = "button-today-projects";
    today.innerHTML = `<span class="material-icons">
    today
    </span>Today
    `;

    // third sidebar grandchild
    const week = document.createElement("button");
    week.class = "button-default-project active";
    week.id = "button-week-projects";
    week.innerHTML = `<span class="material-icons">
    date_range
    </span>Week
    `;

    // Appending sidebar grandchild
    defaultProjectList.appendChild(inbox);
    defaultProjectList.appendChild(today);
    defaultProjectList.appendChild(week);
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
    const addProjectBtn = document.createElement("button");
    addProjectBtn.class = "button-add-project";
    addProjectBtn.id = "button-add-project";
    addProjectBtn.innerHTML = `<span class="material-icons">
    add
    </span>Add Project`;

    sidebar.appendChild(addProjectBtn);

    // container => child
    const container = document.createElement("div");
    container.className = "container";
    container.id = "container";

    // container child
    const projectName = document.createElement("div");
    projectName.className = "project-name";
    projectName.id = "project-name";
    projectName.innerHTML = "Inbox";

    // container child
    const taskList = document.createElement("div");
    taskList.className = "task-list";
    taskList.id = "task-list";

    // container child
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.id = "add-task-btn";
    addTaskBtn.innerHTML = `<span class="material-icons">
    add
    </span>Add Task`;

    // appending container children
    container.appendChild(projectName);
    container.appendChild(taskList);
    container.appendChild(addTaskBtn);

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
}
