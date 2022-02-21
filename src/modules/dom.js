export default class DOM {
  constructor(id, className, eltType, text = "") {
    this.id = id;
    this.className = className;
    this.eltType = eltType;
    this.textContent = text;
  }

  returnNodeById(id) {
    const node = document.getElementById(id);
    return node;
  }

  /*
  returnEltsByClass(className) {
    const classArr = document.getElementsByClassName(className);
    return classArr;
  }
  */

  createElt(parent) {
    const parentNode = parent;
    console.log(parentNode);
    let childNode  = document.createElement(this.eltType);
    childNode.id = this.id;
    childNode.className = this.className;
    childNode.textContent = this.textContent;
    console.log(childNode);
    parentNode.appendChild(childNode);
  }
}
