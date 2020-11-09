import types from "../types/refs";

const INIT_STATE = [];

const refsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.SET_REF:
      return [...state, action.payload];
    case types.REMOVE_REF:
      return state.filter((refObj) => refObj.name !== action.payload);
    default:
      return state;
  }
};

export default refsReducer;
