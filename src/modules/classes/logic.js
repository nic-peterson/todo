import {
  returnType,
  intializeProject,
} from '../helperFunctions/logicClassFunctions';
import { searchItem } from '../helperFunctions/localStorage';

class Logic {
  constructor() {
    this.tasks = returnType('task');
    this.projects = returnType('project');
    this.liveProject = intializeProject();
  }

  setLiveProject(projectName) {
    const searchObj = searchItem(projectName);
    if (searchObj) {
      this.liveProject = searchObj;
    } else if (projectName === 'Today') {
      this.liveProject = { title: 'Today' };
    } else if (projectName === 'Week') {
      this.liveProject = { title: 'Week' };
    }
  }

  returnProject() {
    return this.liveProject;
  }
}

export default Logic;
