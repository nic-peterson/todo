import {
  isTypeEmpty,
  retrieveAllItemsByType,
  saveItem,
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
      this.liveProject = searchObj;
    } else if (projectName === "Today") {
      this.liveProject = { "title": "Today" };
    } else if (projectName === "Week") {
      this.liveProject = { "title": "Week" };
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
