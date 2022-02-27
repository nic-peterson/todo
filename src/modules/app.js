import "../style.css";
import printMe from "../print";
import Task from "./task";
import Project from "./project";
import DOM from "./domFunctions";
import {
  saveItem,
  retrieveItem,
  retrieveAllItems,
  removeItem,
  removeAllItems,
  storageAvailable,
} from "./localStorage";
import { initialLoad } from "./ui";

function app() {
  initialLoad();
}

export { app };
