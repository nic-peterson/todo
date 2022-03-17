import generateID from '../helperFunctions/classFunctions';

export default class Project {
  constructor(title = 'Inbox') {
    this.title = title;
    this.id = generateID(1, 1000000);
    this.type = 'project';
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  displayTitle() {
    return this.title;
  }
}
