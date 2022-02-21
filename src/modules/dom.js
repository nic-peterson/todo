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
    let childNode  = document.createElement(this.eltType);
    childNode.id = this.id;
    childNode.className = this.className;
    childNode.textContent = this.textContent;
    parentNode.appendChild(childNode);
  }

  addEventListener(type, listener) {
    const el = this.returnNodeById(this.id);
    el.addEventListener(type, listener, false);
  }
}
