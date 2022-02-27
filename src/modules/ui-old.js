import { add } from "date-fns";
import { createElt, addListener, returnNodeById } from "./domFunctions";
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
    `
    );
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
    this.taskList = createElt(
      this.container,
      "div",
      "task-list",
      "task-list",
      ""
    );
    this.taskArr = this.retrieveTasks();
    this.addTaskButton = this.createAddTaskButton(this.container);
    this.completeTask = this.completeTask.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  loadPage() {
    this.renderTaskList(this.taskList, this.taskArr);
    this.createFooter();
  }

  refreshPage() {
  
    this.renderTaskList(this.taskList, this.taskArr);
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
    
    addTaskBtn.addEventListener("click", this.createTask());
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


  renderTaskList(parentNode, tasks) {
    if (tasks.length < 1) {
      return;
    } else {
      tasks.forEach((elt) => {
        const task = this.createTaskDomElt(parentNode, elt);
      });
    }
  }

  createTaskDomElt(parentNode, elt) {
    const taskHtmlElt = createElt(
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
      console.log("createTaskDomElt");
      console.log(this);
      this.completeTask(elt.id);
    });
    addListener(returnNodeById(`edit-task-${elt.id}`), "click", () => {
      console.log(`edit-task-${elt.id}`);
    });
    addListener(returnNodeById(`delete-task-${elt.id}`), "click", () => {
      console.log(`delete-task-${elt.id}`);
    });
    //return taskHTMLElt
  }

  createTask() {
    return function () {
      const taskList = returnNodeById("task-list");
      const task1 = new Task(
        "Pick up milk",
        "From Safeway",
        "02/25/2022",
        "mid"
      );
      createElt(
        taskList,
        "div",
        "task",
        task1.id,
        `<div class="task-left">
        <div class="radio ${task1.priority}" id="complete-task-${task1.id}">
          <span class="material-icons"> radio_button_unchecked </span>
        </div>
        <div class="task-basic-info">
          <div class="task-title">${task1.title}</div>
          <div class="task-due-date">${task1.dueDate}</div>
        </div>
      </div>
      <div class="task-right">
        <div class="edit-task" id="edit-task-${task1.id}">
          <span class="material-icons"> edit </span>
        </div>
        <div class="delete-task" id="delete-task-${task1.id}">
          <span class="material-icons"> close </span>
      </div>
        `
      );

      addListener(returnNodeById(`complete-task-${task1.id}`), "click", () => {
        console.log(`complete-task-${task1.id}`);
        console.log(this);
        this.completeTask(task1.id);
      });
      addListener(returnNodeById(`edit-task-${task1.id}`), "click", () => {
        console.log(`edit-task-${task1.id}`);
      });
      addListener(returnNodeById(`delete-task-${task1.id}`), "click", () => {
        console.log(`delete-task-${task1.id}`);
      });
      const task2 = new Task(
        "Finish chapter 2",
        "Of Mice & Men",
        "02/26/2022",
        "low"
      );
      createElt(
        taskList,
        "div",
        "task",
        task2.id,
        `<div class="task-left">
        <div class="radio ${task2.priority}" id="complete-task-${task2.id}">
          <span class="material-icons"> radio_button_unchecked </span>
        </div>
        <div class="task-basic-info">
          <div class="task-title">${task2.title}</div>
          <div class="task-due-date">${task2.dueDate}</div>
        </div>
      </div>
      <div class="task-right">
        <div class="edit-task" id="edit-task-${task2.id}">
          <span class="material-icons"> edit </span>
        </div>
        <div class="delete-task" id="delete-task-${task2.id}">
          <span class="material-icons"> close </span>
      </div>
        `
      );
      addListener(returnNodeById(`complete-task-${task2.id}`), "click", () => {
        console.log(`complete-task-${task2.id}`);
        this.completeTask(task2.id);
      });
      addListener(returnNodeById(`edit-task-${task2.id}`), "click", () => {
        console.log(`edit-task-${task2.id}`);
      });
      addListener(returnNodeById(`delete-task-${task2.id}`), "click", () => {
        console.log(`delete-task-${task2.id}`);
      });
      const task3 = new Task(
        "Do the dishes",
        "Fromo this afternoon & dinner",
        "02/24/2022",
        "high"
      );
      createElt(
        taskList,
        "div",
        "task",
        task3.id,
        `<div class="task-left">
        <div class="radio ${task3.priority}" id="complete-task-${task3.id}">
          <span class="material-icons"> radio_button_unchecked </span>
        </div>
        <div class="task-basic-info">
          <div class="task-title">${task3.title}</div>
          <div class="task-due-date">${task3.dueDate}</div>
        </div>
      </div>
      <div class="task-right">
        <div class="edit-task" id="edit-task-${task3.id}">
          <span class="material-icons"> edit </span>
        </div>
        <div class="delete-task" id="delete-task-${task3.id}">
          <span class="material-icons"> close </span>
      </div>
        `
      );
      addListener(returnNodeById(`complete-task-${task3.id}`), "click", () => {
        console.log(`complete-task-${task3.id}`);
        this.completeTask(task3.id);
        
      });
      addListener(returnNodeById(`edit-task-${task3.id}`), "click", () => {
        console.log(`edit-task-${task3.id}`);
      });
      addListener(returnNodeById(`delete-task-${task3.id}`), "click", () => {
        console.log(`delete-task-${task3.id}`);
      });

      saveItem(task1.id, task1);
      retrieveItem(task1.id);
      //const task1Elt = createTaskDomElt(this.taskList, task1);
      saveItem(task2.id, task2);
      retrieveItem(task2.id);
      //const task2Elt = createTaskDomElt(this.taskList, task2);
      saveItem(task3.id, task3);
      retrieveItem(task3.id);
      //const task3Elt = createTaskDomElt(this.taskList, task3);

      //this.refreshPage();
    };
  }

  completeTask(taskID) {
    const completedTask = returnNodeById(taskID);
    completedTask.remove();
    removeItem(taskID);
  }
}
