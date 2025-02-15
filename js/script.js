const LOCAL_STORAGE = "users";

function saveToStorage(user) {
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(user));
}
function getFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];
}

export { getFromStorage, saveToStorage };
