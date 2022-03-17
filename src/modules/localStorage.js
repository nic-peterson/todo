/* eslint-disable no-plusplus */
function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isEmpty() {
  let boolFlag = true;
  if (Object.keys(localStorage).length > 0) {
    boolFlag = false;
  }
  return boolFlag;
}

function retrieveAllItemsByType(type) {
  const items = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    const dataObj = JSON.parse(localStorage.getItem(keys[i]));
    if (dataObj.type === type) {
      items.push(dataObj);
    }
  }
  return items;
}

function isTypeEmpty(type) {
  let boolFlag = true;
  const typeArr = retrieveAllItemsByType(type);
  if (typeArr.length > 0) {
    boolFlag = false;
  }
  return boolFlag;
}

function retrieveAllItems() {
  const items = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    items.push(keys[i]);
  }
  return items;
}

function doesProjectExist(item) {
  const lsArr = retrieveAllItemsByType('project');
  const returnTarget = lsArr.find(
    (obj) => obj.title.toLowerCase() === item.toLowerCase(),
  );
  if (returnTarget) {
    return true;
  }
  return false;
}

function doesTaskExist(itemId) {
  const lsArr = retrieveAllItemsByType('task');
  const returnTarget = lsArr.find((obj) => obj.id === itemId);

  // returnTarget ? true : false;
  if (returnTarget) {
    return true;
  }

  return false;
}

function searchItem(target) {
  const lsArr = retrieveAllItemsByType('project');
  const returnTarget = lsArr.find(
    (obj) => obj.title.toLowerCase() === target.toLowerCase(),
  );
  return returnTarget;
}

function retrieveItem(key) {
  if (!localStorage.getItem(key)) {
    return null;
  }
  const retrievedItem = localStorage.getItem(key);
  return JSON.parse(retrievedItem);
}

// deletes item from localStorage
function removeItem(keyName) {
  localStorage.removeItem(keyName);
}

// clears the entire localStorage
function removeAllItems() {
  localStorage.clear();
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

export {
  saveItem,
  isEmpty,
  isTypeEmpty,
  retrieveItem,
  retrieveAllItems,
  retrieveAllItemsByType,
  removeItem,
  removeAllItems,
  storageAvailable,
  doesProjectExist,
  searchItem,
  doesTaskExist,
};
