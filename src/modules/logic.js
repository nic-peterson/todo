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
    // const searchObj = retrieveAllItemsByType("project").find(
    //   (obj) => obj.title === projectName
    // );
    if (searchObj) {
      this.liveProject = searchObj;
    } else if (projectName === "Today" || projectName === "Week") {
      this.liveProject = { title: projectName };
    } else {
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
      // const lsArr = retrieveAllItemsByType("project");
      // inboxProject = lsArr.find((obj) => obj.title === "Inbox");
      //lsArr.filter((item) => item.title === "Inbox")[0];
    } else {
      inboxProject = new Project("Inbox");
      saveItem(inboxProject.id, inboxProject);
    }
    return inboxProject;
  }
}

export { Logic };
