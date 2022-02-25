import { add } from "date-fns";
import { createElt, addListener, returnNodeById } from "./dom";
import Project from "./project";
import Task from "./task";
import {
  saveItem,
  retrieveAllItemsByType,
  retrieveItem,
  removeItem,
  removeAllItems,
} from "./localStorage";

export default class UI {
  constructor() {
    this.header = createElt(document.body, "div", "header", "header", "");
    this.logo = createElt(
      this.header,
      "div",
      "logo",
      "logo",
      `<p><span class="material-icons">
    done_all
    </span>ToDo!</p>`
    );
    this.body = createElt(document.body, "div", "body", "body", "");
    this.sidebar = createElt(this.body, "div", "sidebar", "sidebar", "");
    this.defaultProjectList = createElt(
      sidebar,
      "div",
      "default-project-list",
      "default-project-list",
      ""
    );
    this.inbox = createElt(
      this.defaultProjectList,
      "button",
      "button-default-project",
      "button-inbox-projects",
      `<p><span class="material-icons">
    inbox
    </span>Inbox</p>
    ` 
    );
    this.today = createElt(
      this.defaultProjectList,
      "button",
      "button-default-project",
      "button-today-project",
      `<p><span class="material-icons">
    today
    </span>Today</p>
    `
    );
    this.week = createElt(
      this.defaultProjectList,
      "button",
      "button-default-project",
      "button-week-projects",
      `<p><span class="material-icons">
    date_range
    </span>Week</p>
    `);
    this.projectsTitle = createElt(
      this.sidebar,
      "div",
      "projects-title",
      "projects-title",
      "Projects"
    );
    this.projectList = createElt(
      this.sidebar,
      "div",
      "projects-list",
      "projects-list",
      ""
    );
    this.addProjectButton = this.createAddProjectButton(this.sidebar);
    this.container = createElt(this.body, "div", "container", "container", "");
    this.projectname = createElt(
      this.container,
      "div",
      "project-name",
      "project-name",
      "<h1>Inbox</h1>"
    );
    this.taskList = createElt(this.container, "div", "task-list", "task-list", "");
    this.taskArr = this.retrieveTasks();
    this.addTaskButton = this.createAddTaskButton(this.container);
  }

  loadPage() {
    //this.createHeader();
    this.createBody();
    this.createFooter();
    this.retrieveTasks();
    this.retrieveProjectTasks("387296");
    this.retrieveProject("387296");
  }

  createHeader() {
    // const header = createElt(document.body, "div", "header", "header", "");

    // const logo = createElt(
    //   header,
    //   "div",
    //   "logo",
    //   "logo",
    //   `<p><span class="material-icons">
    // done_all
    // </span>ToDo!</p>`
    // );
  }

  createBody() {
    // Body. This the parent container. It has two children: sidebar (listing out projects) and body (listing out tasks)
    //const body = createElt(document.body, "div", "body", "body", "");

    // Sidebar → Body child #1.
    //const sidebar = createElt(body, "div", "sidebar", "sidebar", "");

    // Sidebar children

    // First sidebar child. Breaks down the default projects: inbox, due today, and due this week
    /*
    const defaultProjectList = createElt(
      sidebar,
      "div",
      "default-project-list",
      "default-project-list",
      ""
    );
    */
    // sidebar grandchildren
    // All purpose inbox for capturing default tasks
    /*
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
    */
    // Shows tasks due today
    /*
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
    */
    // Shows tasks due this week
    /*
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
      */
    // Second sidebar child - PROJECT. We'll give the user the ability to add/view custom projects below this title
    /*
    const projectsTitle = createElt(
      sidebar,
      "div",
      "projects-title",
      "projects-title",
      "Projects"
    );
    */

    // Appending third sidebar child. This element is a container for the users' list of custom projects
    /*
    const projectList = createElt(
      sidebar,
      "div",
      "projects-list",
      "projects-list",
      ""
    );
    */

    // Apending fourth sidebar child. The user clicks this button to create new custom projects.
    //const addProjectButton = this.createAddProjectButton(this.sidebar);

    // container → Body child #2
    //const container = createElt(body, "div", "container", "container", "");

    // container child #1. Shows current project name
    // TODO → will need to make this dynamic based on the project selected
    /*
    const projectname = createElt(
      container,
      "div",
      "project-name",
      "project-name",
      "<h1>Inbox</h1>"
    );
    */

    // container child #2. Shows the tasks list
    // TODO make this dynamic
    //const taskList = createElt(container, "div", "task-list", "task-list", "");
    //const taskArr = this.retrieveTasks();
    this.renderTaskList(this.taskList, this.taskArr);

    // container child
    // TODO after the task button is clicked, create a modal that adds the task
    //const addTaskButton = this.createAddTaskButton(container);
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
      const task = new Task("title1", "desc", "dueDate", "priority");
      const task1 = new Task("title2", "desc", "dueDate", "priority");
      const task2 = new Task("title3", "desc", "dueDate", "priority");
      project.addTask(task);
      project.addTask(task1);
      project.addTask(task2);
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
      //const task = new Task("title", "desc", "dueDate", "priority");
      //saveItem(task.id, task);

      const task1 = new Task("titl4", "desc", "dueDate", "priority");
      const task2 = new Task("title5", "desc", "dueDate", "priority");
      const task3 = new Task("title6", "desc", "dueDate", "priority");

      saveItem(task1.id, task1);
      retrieveItem(task1.id);
      saveItem(task2.id, task2);
      retrieveItem(task2.id);
      saveItem(task3.id, task3);
      retrieveItem(task3.id);
    });
  }

  createNewProject(title) {
    const project = new Project(title);
    console.log(`project.title: ${project.title}`);
  }

  retrieveTasks() {
    const arr = retrieveAllItemsByType("task");
    return arr;
  }

  retrieveProject(id) {
    const project = retrieveItem(id);

    console.log(project);
  }

  retrieveProjectTasks(id) {
    const projectTasks = retrieveItem(id).tasks;
    console.log(projectTasks);
  }

  clear(parentNode) {}

  renderTaskList(parentNode, tasks) {
    if (tasks.length < 1) {
      return;
    } else {
      tasks.forEach((elt) => {
        const task = createElt(
          parentNode,
          "div",
          "task",
          elt.id,
          `<div class="task-left">
          <div class="radio ${elt.priority}" id="complete-task-${elt.id}">
            <span class="material-icons"> radio_button_unchecked </span>
          </div>
          <div class="task-basic-info">
            <div class="task-title">${elt.title}</div>
            <div class="task-due-date">${elt.dueDate}</div>
          </div>
        </div>
        <div class="task-right">
          <div class="edit-task" id="edit-task-${elt.id}">
            <span class="material-icons"> edit </span>
          </div>
          <div class="delete-task" id="delete-task-${elt.id}">
            <span class="material-icons"> close </span>
        </div>
          `
        );
        addListener(returnNodeById(`complete-task-${elt.id}`), "click", () => {
          console.log(`complete-task-${elt.id}`);
        });
        addListener(returnNodeById(`edit-task-${elt.id}`), "click", () => {
          console.log(`edit-task-${elt.id}`);
        });
        addListener(returnNodeById(`delete-task-${elt.id}`), "click", () => {
          console.log(`delete-task-${elt.id}`);
        });
      });
    }
  }
}
