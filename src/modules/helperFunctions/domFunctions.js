/* eslint no-param-reassign: ["error", { "props": false }] */

export function returnNodeById(id) {
  const node = document.getElementById(id);
  return node;
}

export function createElt(parent, type, className, id, innerHTML) {
  const parentNode = parent;
  const childNode = document.createElement(type);
  childNode.className = className;
  childNode.id = id;
  childNode.innerHTML = innerHTML;
  parentNode.appendChild(childNode);

  return childNode;
}

export function addListener(obj, type, listener) {
  obj.addEventListener(type, listener);
}

// clear parent container by removing all child elts
export function clear(parent) {
  parent.style = '';
  parent.innerHTML = '';
}
