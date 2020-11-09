import types from "../types/distance";

const INIT_STATE = null;

const distanceReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.SET_MIN:
      return action.payload;
    default:
      return state;
  }
};

export default distanceReducer;
