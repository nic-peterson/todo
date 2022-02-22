import { add } from "date-fns";
import { createElt, addEventListenerFunc } from "./dom";
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
    const header = document.createElement("div");
    header.className = "header";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.id = "logo";
    logo.innerHTML = `<p><span class="material-icons">
    done_all
    </span>ToDo!</p>`;

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
    defaultProjectList.className = "default-project-list";

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
    inbox.className = "button-default-project";
    inbox.id = "button-inbox-projects";
    inbox.innerHTML = `<p><span class="material-icons">
    inbox
    </span>Inbox</p>
    `;
    // second sidebar grandchild
    const today = document.createElement("button");
    today.className = "button-default-project";
    today.id = "button-today-projects";
    today.innerHTML = `<p><span class="material-icons">
    today
    </span>Today</p>
    `;

    // third sidebar grandchild
    const week = document.createElement("button");
    week.className = "button-default-project";
    week.id = "button-week-projects";
    week.innerHTML = `<p><span class="material-icons">
    date_range
    </span>Week</p>
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
    this.createAddProjectButton(sidebar);
    // const addProjectBtn = document.createElement("button");
    // addProjectBtn.className = "button-add-project";
    // addProjectBtn.id = "button-add-project";
    // addProjectBtn.innerHTML = `<p><span class="material-icons">
    // add
    // </span>Add Project</p>`;

    // addProjectBtn.addEventListener(
    //   "click",
    //   () => {
    //     const project = new Project("project4");
    //     const task = new Task("title", "desc", "dueDate", "priority");
    //     const task2 = new Task("title2", "desc2", "dueDate2", "priority2");
    //     project.addTask(task);
    //     project.addTask(task2);
    //     console.log(`project.title: ${project.title}`);
    //     console.log(`project.id: ${project.id}`);
    //     console.log(`project.stringifyObject: ${project.stringifyObject()}`);
    //     saveItem(project.id, project);
    //     retrieveItem(project.id);
    //   },
    //   false
    // );

    // sidebar.appendChild(addProjectBtn);

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
    const addTaskBtn = this.createAddTaskButton();

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

  createAddProjectButton(parentNode) {
    const addProjectBtn = document.createElement("button");
    addProjectBtn.className = "button-add-project";
    addProjectBtn.id = "button-add-project";
    addProjectBtn.innerHTML = `<p><span class="material-icons">
    add
    </span>Add Project</p>`;

    addProjectBtn.addEventListener(
      "click",
      () => {
        const project = new Project("project4");
        const task = new Task("title", "desc", "dueDate", "priority");
        const task2 = new Task("title2", "desc2", "dueDate2", "priority2");
        project.addTask(task);
        project.addTask(task2);
        console.log(`project.title: ${project.title}`);
        console.log(`project.id: ${project.id}`);
        console.log(`project.stringifyObject: ${project.stringifyObject()}`);
        saveItem(project.id, project);
        retrieveItem(project.id);
      },
      false
    );

    parentNode.appendChild(addProjectBtn);
  }

  createAddTaskButton() {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "button-add-task";
    addTaskBtn.id = "button-add-task";
    addTaskBtn.innerHTML = `<p><span class="material-icons">
    add
    </span>Add Task</p>`;

    return addTaskBtn;
  }

  createNewProject(title) {
    const project = new Project(title);
    console.log(`project.title: ${project.title}`);
  }
}
