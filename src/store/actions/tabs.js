import types from "../types/tabs";

export const addTab = (tab) => ({ type: types.ADD_TAB, payload: tab });

export const removeTab = (name) => ({ type: types.REMOVE_TAB, payload: name });

export const setCurrentTab = (tab) => ({
  type: types.SET_CURRENT_TAB,
  payload: tab,
});

export default { addTab, removeTab, setCurrentTab };
