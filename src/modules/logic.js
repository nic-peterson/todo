import {
  isEmpty,
  isTypeEmpty,
  retrieveAllItems,
  retrieveAllItemsByType,
  retrieveItem,
  saveItem,
  doesItemExist,
  searchItem,
} from "./localStorage";
import { Project } from "./project";

class Logic {
  constructor() {
    this.tasks = this.returnType("task");
    this.projects = this.returnType("project");
    this.liveProject = this.intializeProject();
  }

  returnType(type) {
    if (isTypeEmpty(type)) {
      return [];
    }
    return retrieveAllItemsByType(type);
  }

  setLiveProject(projectName) {
    const searchObj = searchItem(projectName);
    if (searchObj) {
      console.log(searchObj);
      this.liveProject = searchObj;
    } else if (projectName === "Today") {
      console.log("inside");
      this.liveProject = { "title": "Today" };
      console.log(this.liveProject);
    } else if (projectName === "Week") {
      console.log("inside");
      this.liveProject = { "title": "Week" };
      console.log(this.liveProject);
    }
    else {
      console.log("That project doesn't exist!");
    }
  }

  returnProject() {
    return this.liveProject;
  }

  intializeProject() {
    let inboxProject;
    if (isTypeEmpty("project") !== true) {
      inboxProject = searchItem("Inbox");
    } else {
      inboxProject = new Project("Inbox");
      saveItem(inboxProject.id, inboxProject);
    }
    return inboxProject;
  }
}

export { Logic };
