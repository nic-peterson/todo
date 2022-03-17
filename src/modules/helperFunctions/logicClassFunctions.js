import {
  isTypeEmpty,
  retrieveAllItemsByType,
  saveItem,
  searchItem,
} from './localStorage';
import { Project } from '../classes/project';

export function returnType(type) {
  if (isTypeEmpty(type)) {
    return [];
  }
  return retrieveAllItemsByType(type);
}

export function intializeProject() {
  let inboxProject;
  if (isTypeEmpty('project') !== true) {
    inboxProject = searchItem('Inbox');
  } else {
    inboxProject = new Project('Inbox');
    saveItem(inboxProject.id, inboxProject);
  }
  return inboxProject;
}
