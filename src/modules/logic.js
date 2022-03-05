import {
  isEmpty,
  isTypeEmpty,
  retrieveAllItems,
  retrieveAllItemsByType,
  retrieveItem,
  saveItem,
} from "./localStorage";
import { Project } from "./project";

class Logic {
  constructor() {
    this.tasks = this.returnType("task");
    this.projects = this.returnType("project");
    this.liveProjectID = this.returnLiveProject();
  }

  returnType(type) {
    if (isTypeEmpty(type)) {
      return [];
    }
    return retrieveAllItemsByType(type);
  }

  setLiveProject(projectID) {
    const lsArr = retrieveAllItemsByType("project");
    if (lsArr.includes(projectID)) {
      this.liveProject = projectID;
    } else {
      console.log("That project doesn't exist!");
    }
  }

  returnLiveProject() {
    if (isTypeEmpty("project") !== true) {
      console.log("yooo!");
      const lsArr = retrieveAllItemsByType("project");
      const inboxProject = lsArr.filter((item) => item.title === "Inbox");
      return inboxProject.id;
    } else {
      console.log(isTypeEmpty("project"));
      console.log(retrieveAllItemsByType("project"));
      const inbox = new Project("Inbox");
      saveItem(inbox.id, inbox);
      return inbox.id;
    }
  }
}

export { Logic };
