function returnNodeById(id) {
  const node = document.getElementById(id);
  return node;
}

function createElt(parent, type, className, id, innerHTML) {
  const parentNode = parent;
  let childNode = document.createElement(type);
  childNode.className = className;
  childNode.id = id;
  childNode.innerHTML = innerHTML;
  parentNode.appendChild(childNode);

  return childNode;
}

function addListener(obj, type, listener) {
  obj.addEventListener(type, listener, false);
}

export { returnNodeById, createElt, addListener };
