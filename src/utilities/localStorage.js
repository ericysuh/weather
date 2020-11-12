export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    const stateObject = JSON.parse(serializedState);
    if (serializedState === null) {
      return undefined;
    }
    return stateObject;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, key) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
    return undefined;
  } catch (err) {
    return undefined;
  }
};
