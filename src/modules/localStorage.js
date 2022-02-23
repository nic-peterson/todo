function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function retrieveAllItemsByType(type) {
  console.log(type);
  let items = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    const dataObj = JSON.parse(localStorage.getItem(keys[i]));
    if(dataObj.type === type){
      items.push(dataObj);
    }
    
  }
  return items;
}

function retrieveItem(key) {
  if (!localStorage.getItem(key)) {
    console.log("That entry doesn't exist!");
  } else {
    const retrievedItem = localStorage.getItem(key);
    console.log(`retrievedItem: ${retrievedItem}`);
    return JSON.parse(retrievedItem);
  }
}

//deletes item from localStorage
function removeItem(keyName) {
  localStorage.removeItem(keyName);
}

//clears the entire localStorage
function removeAllItems() {
  localStorage.clear();
  console.log("clear records");
}

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export {
  saveItem,
  retrieveItem,
  retrieveAllItemsByType,
  removeItem,
  removeAllItems,
  storageAvailable,
};
