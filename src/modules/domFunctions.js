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
  obj.addEventListener(type, listener);
}
// clear parent container by removing all child elts
function clear(parent) {
  parent.style = "";
  parent.innerHTML = "";
}

// use in conjunction with clear. First clear child elts
// then reneder the elements to show the changes
function render() {}

export { returnNodeById, createElt, addListener, clear, render };
