import types from "../types/tabs";

const INIT_STATE = { tabs: [], current: null };

const refsReducer = (state = INIT_STATE, action) => {
  let tabs;
  switch (action.type) {
    case types.ADD_TAB:
      tabs = state.tabs;
      if (tabs.find((tab) => tab.name === action.payload.name)) return state;
      return { ...state, tabs: [...state.tabs, action.payload] };
    case types.SET_CURRENT_TAB:
      return { ...state, current: action.payload };
    case types.REMOVE_TAB:
      tabs = state.tabs.filter((tab) => tab.name !== action.payload);
      return { ...state, tabs };
    default:
      return state;
  }
};

export default refsReducer;
