import { isToday, parseISO, isThisWeek } from 'date-fns';
import {
  createElt,
  addListener,
  returnNodeById,
  clear,
} from '../helperFunctions/domFunctions';
import {
  addProject,
  cancelAddProject,
  submitProject,
  deleteProject,
} from '../helperFunctions/projectClassFunctions';
import Logic from '../classes/logic';
import {
  removeItem,
  retrieveAllItemsByType,
  retrieveItem,
  saveItem,
} from '../helperFunctions/localStorage';
import Task from '../classes/task';
import header from './header';
import footer from './footer';

export const logic = new Logic();

/*
The body function creates a div element called body with two child elements:
sidebar and container. The sidebar is used to show the project list and the
container div shows the current project and relevant task list w/ add task button.
*/
function container() {
  if (!returnNodeById('container')) {
    createElt(
      returnNodeById('body'),
      'div',
      'container',
      'container',
      '',
    );
  }
  createElt(
    returnNodeById('container'),
    'div',
    'project-name',
    'project-name',
    `<h1>${logic.returnProject().title}</h1>`,
  );
  const taskList = createElt(
    returnNodeById('container'),
    'div',
    'task-list',
    'task-list',
    '',
  );

  function clearTaskModal() {
    clear(returnNodeById('container'));
    container();
  }

  function updateTask(taskId) {
    const task = retrieveItem(taskId);
    const title = document.getElementById(
      'add-task-input-title',
    ).value;
    const description = document.getElementById(
      'add-task-input-desc',
    ).value;
    const dueDate = document.getElementById(
      'add-task-modal-due-date',
    ).value;
    const priority = document.getElementById(
      'add-task-modal-priority-selector',
    ).value;

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;

    saveItem(task.id, task);
    clearTaskModal();
  }

  function editTaskModal(taskId) {
    const task = retrieveItem(taskId);
    const taskHtmlElt = document.getElementById(
      `task-item-${taskId}`,
    );

    const modal = document.createElement('div');
    modal.className = 'add-task-modal';
    modal.id = 'add-task-modal';

    taskHtmlElt.after(modal);
    taskHtmlElt.style.display = 'none';

    // create modalHeader
    createElt(
      modal,
      'div',
      'add-task-modal-header',
      'add-task-modal-header',
      `
      <h5 class="add-task-modal-title" id="add-task-model-Title">New Task</h5>
      <button type="button" class="close" id="add-task-modal-close" aria-label="Close">
        <span aria-hidden="true">??</span>
      </button>
      `,
    );

    // create modalBody
    createElt(
      modal,
      'div',
      'add-task-modal-body',
      'add-task-modal-body',
      `<form>
        <div class="add-task-modal-title-desc">
          <div class="add-task-modal-title">
            <label for="title">Title:</label><br>
            <input 
              type="text" 
              id="add-task-input-title" 
              name="title" 
              value=${task ? task.title : ' '}
            >
            <br>
          </div>
          <div class="add-task-modal-desc">
            <label for="desc">Description:</label><br>
            <input 
              type="text" 
              id="add-task-input-desc" 
              name"desc" 
              value=${task ? task.description : ' '}
            >
            <br>
          </div>
        </div>
        <div class="add-task-modal-other-info" id="add-task-modal-other-info">
          <div class="add-task-modal-due-date">
            <label for="due-date">Due Date:</label><br>
            <input 
              type="datetime-local" 
              id="add-task-modal-due-date" 
              name="due-date"
              value=${task ? task.dueDate : new Date()}
            >
          </div>
          <div class="add-task-modal-priority">
            <label for="priority">Priority:</label><br>
            <select name="priority" id="add-task-modal-priority-selector">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </form>`,
    );

    createElt(
      modal,
      'div',
      'add-task-modal-footer',
      'add-task-modal-footer',
      `
      <button 
        class="add-task-modal-close-btn"
        id="add-task-modal-close-btn"
        >
        Close
      </button>
      <button 
        class="update-task-modal-add-btn"
        id="update-task-modal-add-btn"
        >
        Update Task
      </button>
      `,
    );

    document
      .getElementById('add-task-modal-close')
      .addEventListener('click', clearTaskModal);
    document
      .getElementById('add-task-modal-close-btn')
      .addEventListener('click', clearTaskModal);
    document
      .getElementById('update-task-modal-add-btn')
      .addEventListener('click', () => {
        updateTask(task.id);
      });
  }

  const populateTaskList = () => {
    const taskArr = retrieveAllItemsByType('task');

    taskArr.forEach((task) => {
      const liveProjTitle = logic.returnProject().title;
      const taskProj = task.project;
      const checkIsToday = isToday(parseISO(task.dueDate));
      const checkIsThisWeek = isThisWeek(parseISO(task.dueDate));

      if (taskProj === liveProjTitle) {
        createElt(
          taskList,
          'div',
          'task-item',
          `task-item-${task.id}`,
          `<div class="task-left">
            <div 
              class="radio 
              ${task.priority.toLowerCase()}" 
              id="complete-task-${task.id}"
            >
              <span class="material-icons"> radio_button_unchecked </span>
            </div>
            <div class="task-basic-info">
              <div class="task-title">${task.title}</div>
              <div class="task-due-date">${task.dueDate}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="edit-task" id="edit-task-${task.id}">
              <span class="material-icons"> edit </span>
            </div>
            <div class="delete-task" id="delete-task-${task.id}">
              <span class="material-icons"> close </span>
            </div>
          </div>
        `,
        );

        document
          .getElementById(`complete-task-${task.id}`)
          .addEventListener('click', () => {
            removeItem(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`delete-task-${task.id}`)
          .addEventListener('click', () => {
            removeItem(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`edit-task-${task.id}`)
          .addEventListener('click', () => {
            const addTaskBtn = returnNodeById('button-add-task');
            addTaskBtn.style.display = 'none';
            editTaskModal(task.id);
          });
      } else if (liveProjTitle === 'Today' && checkIsToday) {
        createElt(
          taskList,
          'div',
          'task-item',
          `task-item-${task.id}`,
          `<div class="task-left">
            <div 
              class="radio ${task.priority.toLowerCase()}" 
              id="complete-task-${task.id}"
            >
              <span class="material-icons"> radio_button_unchecked </span>
            </div>
            <div class="task-basic-info">
              <div class="task-title">${task.title}</div>
              <div class="task-due-date">${task.dueDate}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="edit-task" id="edit-task-${task.id}">
              <span class="material-icons"> edit </span>
            </div>
            <div class="delete-task" id="delete-task-${task.id}">
              <span class="material-icons"> close </span>
            </div>
          </div>
        `,
        );
        document
          .getElementById(`delete-task-${task.id}`)
          .addEventListener('click', () => {
            removeItem(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`edit-task-${task.id}`)
          .addEventListener('click', () => {
            const addTaskBtn = returnNodeById('button-add-task');
            addTaskBtn.style.display = 'none';
            editTaskModal(task.id);
          });
      } else if (liveProjTitle === 'Week' && checkIsThisWeek) {
        createElt(
          taskList,
          'div',
          'task-item',
          `task-item-${task.id}`,
          `<div class="task-left">
            <div 
              class="radio ${task.priority.toLowerCase()}" 
              id="complete-task-${task.id}"
            >
              <span class="material-icons"> radio_button_unchecked </span>
            </div>
            <div class="task-basic-info">
              <div class="task-title">${task.title}</div>
              <div class="task-due-date">${task.dueDate}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="edit-task" id="edit-task-${task.id}">
              <span class="material-icons"> edit </span>
            </div>
            <div class="delete-task" id="delete-task-${task.id}">
              <span class="material-icons"> close </span>
            </div>
          </div>
        `,
        );
        document
          .getElementById(`delete-task-${task.id}`)
          .addEventListener('click', () => {
            removeItem(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`edit-task-${task.id}`)
          .addEventListener('click', () => {
            const addTaskBtn = returnNodeById('button-add-task');
            addTaskBtn.style.display = 'none';
            editTaskModal(task.id);
          });
      }
    });
  };

  populateTaskList();

  createElt(
    returnNodeById('container'),
    'button',
    'button-add-task',
    'button-add-task',
    `<p>
      <span class="material-icons">
        add
      </span>
      Add Task
    </p>`,
  );

  function addTask() {
    const title = document.getElementById(
      'add-task-input-title',
    ).value;
    const description = document.getElementById(
      'add-task-input-desc',
    ).value;
    const dueDate = document.getElementById(
      'add-task-modal-due-date',
    ).value;
    const priority = document.getElementById(
      'add-task-modal-priority-selector',
    ).value;
    let project;
    const currentProject = logic.returnProject().title;
    if (currentProject === 'Today' || currentProject === 'Week') {
      project = 'Inbox';
    } else {
      project = logic.returnProject().title;
    }
    const task = new Task(
      title,
      description,
      dueDate,
      priority,
      project,
    );
    saveItem(task.id, task);
    clearTaskModal();
  }
  function addTaskModal() {
    const modal = createElt(
      returnNodeById('container'),
      'div',
      'add-task-modal',
      'add-task-modal',
      '',
    );

    // create modalHeader
    createElt(
      modal,
      'div',
      'add-task-modal-header',
      'add-task-modal-header',
      `
      <h5 class="add-task-modal-title" id="add-task-model-Title">New Task</h5>
      <button type="button" class="close" id="add-task-modal-close" aria-label="Close">
        <span aria-hidden="true">??</span>
      </button>
      `,
    );

    // create modalBody
    createElt(
      modal,
      'div',
      'add-task-modal-body',
      'add-task-modal-body',
      `<form>
        <div class="add-task-modal-title-desc">
          <div class="add-task-modal-title">
            <label for="title">Title:</label><br>
            <input type="text" id="add-task-input-title" name="title"><br>
          </div>
          <div class="add-task-modal-desc">
            <label for="desc">Description:</label><br>
            <input type="text" id="add-task-input-desc" name"desc" ><br>
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
            <select name="priority" id="add-task-modal-priority-selector">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </form>`,
    );

    createElt(
      modal,
      'div',
      'add-task-modal-footer',
      'add-task-modal-footer',
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
      `,
    );

    document
      .getElementById('add-task-modal-close')
      .addEventListener('click', clearTaskModal);
    document
      .getElementById('add-task-modal-close-btn')
      .addEventListener('click', clearTaskModal);
    document
      .getElementById('add-task-modal-add-btn')
      .addEventListener('click', addTask);
  }

  document
    .getElementById('button-add-task')
    .addEventListener('click', () => {
      const addTaskBtn = returnNodeById('button-add-task');
      addTaskBtn.style.display = 'none';
      addTaskModal();
    });
}

function projects() {
  const defaultProjectList = createElt(
    returnNodeById('sidebar'),
    'div',
    'default-project-list',
    'default-project-list',
    '',
  );
  const inbox = createElt(
    defaultProjectList,
    'button',
    'button-default-project',
    'button-inbox-projects',
    `<p><span class="material-icons">
      inbox
      </span>Inbox</p>
      `,
  );
  const today = createElt(
    defaultProjectList,
    'button',
    'button-default-project',
    'button-today-project',
    `<p><span class="material-icons">
  today
  </span>Today</p>
  `,
  );
  const week = createElt(
    defaultProjectList,
    'button',
    'button-default-project',
    'button-week-projects',
    `<p><span class="material-icons">
  date_range
  </span>Week</p>
  `,
  );

  createElt(
    returnNodeById('sidebar'),
    'div',
    'projects-title',
    'projects-title',
    'Projects',
  );

  const projectList = createElt(
    returnNodeById('sidebar'),
    'div',
    'projects-list',
    'projects-list',
    '',
  );

  function popuplateProjectList() {
    const projectArr = retrieveAllItemsByType('project');
    projectArr.forEach((proj) => {
      const project = proj;
      if (project.title !== 'Inbox') {
        createElt(
          projectList,
          'div',
          'project-item',
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
          `,
        );

        addListener(
          returnNodeById('button-today-project'),
          'click',
          () => {},
        );
        addListener(
          returnNodeById(`project-item-${project.id}`),
          'click',
          () => {
            logic.setLiveProject(project.title);
            clear(returnNodeById('container'));
            container(returnNodeById('body'));
          },
        );

        addListener(
          returnNodeById(`project-item-edit-${project.id}`),
          'click',
          () => {
            const projectItem = returnNodeById(
              `project-item-${project.id}`,
            );
            clear(projectItem);
            const input = createElt(
              projectItem,
              'input',
              'input-edit-project',
              `input-edit-project-${project.id}`,
              '',
            );
            function inputBlur() {
              project.title = input.value;
              saveItem(project.id, project);
              logic.setLiveProject(project.title);
              clear(returnNodeById('sidebar'));
              projects(returnNodeById('sidebar'));
              clear(returnNodeById('container'));
              container(returnNodeById('body'));
            }
            input.onblur = inputBlur;
          },
        );
        addListener(
          returnNodeById(`project-item-delete-${project.id}`),
          'click',
          () => {
            deleteProject(retrieveItem(project.id));
            logic.setLiveProject('Inbox');
            clear(returnNodeById('sidebar'));
            projects(returnNodeById('sidebar'));
          },
        );
      }
    });
  }

  popuplateProjectList();

  const addProjectBtn = createElt(
    returnNodeById('sidebar'),
    'button',
    'button-add-project',
    'button-add-project',
    `<p><span class="material-icons">
      add
    </span>Add Project</p>`,
  );

  function addProjectPopUp() {
    createElt(
      returnNodeById('sidebar'),
      'div',
      'add-project-popup',
      'add-project-popup',
      `<input class="input-add-project-popup" id="input-add-project-popup" type="text">
      <div class="add-project-popup-buttons">
        <button class="button-project-popup-add button-project-popup" id="button-project-popup-add">
          Add
        </button>
        <button class="button-project-popup-cancel button-project-popup" id="button-project-popup-cancel">
          Cancel
        </button>
      </div>`,
    );
  }

  addProjectPopUp();

  addListener(inbox, 'click', () => {
    logic.setLiveProject('Inbox');
    clear(returnNodeById('container'));
    container(returnNodeById('body'));
  });
  addListener(today, 'click', () => {
    logic.setLiveProject('Today');
    clear(returnNodeById('container'));
    container(returnNodeById('body'));
  });
  addListener(week, 'click', () => {
    logic.setLiveProject('Week');
    clear(returnNodeById('container'));
    container(returnNodeById('body'));
  });
  addListener(addProjectBtn, 'click', addProject);
  addListener(
    returnNodeById('button-project-popup-cancel'),
    'click',
    cancelAddProject,
  );
  addListener(
    returnNodeById('button-project-popup-add'),
    'click',
    () => {
      const newProject = returnNodeById(
        'input-add-project-popup',
      ).value;
      submitProject(newProject);
      logic.setLiveProject(newProject);
      clear(returnNodeById('sidebar'));
      projects(returnNodeById('sidebar'));
      clear(returnNodeById('container'));
      container(returnNodeById('body'));
    },
  );
}

function sidebar() {
  createElt(returnNodeById('body'), 'div', 'sidebar', 'sidebar', '');
  projects();
}

function body() {
  createElt(document.body, 'div', 'body', 'body', '');
  sidebar();
  container();
}

// Initiatlize screen by calling the header, body, and footer functions
const initialLoad = () => {
  header();
  body();
  footer();
};

export default initialLoad;
