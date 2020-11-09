import types from "../types/refs";

export const setRef = (ref) => ({
  type: types.SET_REF,
  payload: ref,
});

export const removeRef = (ref) => ({
  type: types.REMOVE_REF,
  payload: ref,
});

export default { setRef, removeRef };
