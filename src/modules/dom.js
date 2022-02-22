function returnNodeById(id) {
  const node = document.getElementById(id);
  return node;
}

function createElt(parent, type, className, id, innerHTML) {
  const parentNode = parent;
  let childNode = document.createElement(type);
  childNode.className = className;
  childNode.id = id;
  childNode = innerHTML;
  parentNode.appendChild(childNode);
}

function addEventListenerFunc(type, listener) {
  const el = this.returnNodeById(this.id);
  el.addEventListener(type, listener, false);
}

export {returnNodeById, createElt, addEventListenerFunc}