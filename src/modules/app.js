import "../style.css";
import printMe from "../print";
import Task from "./task";
import Project from "./project";
import DOM from "./dom";
import {
  saveItem,
  retrieveItem,
  retrieveAllItems,
  removeItem,
  removeAllItems,
  storageAvailable,
} from "./localStorage";
import UI from "./ui";

function app() {
    const ui = new UI();
    ui.loadPage();
}

export { app };
