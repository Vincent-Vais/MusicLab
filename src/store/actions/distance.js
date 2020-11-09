import types from "../types/distance";

export const setMin = (ref) => ({
  type: types.SET_MIN,
  payload: ref,
});

export const getMin = (refs, ref) => (dispatch) => {
  if (ref) {
    dispatch(setMin(ref));
  } else {
    let minRef;
    for (let item of refs) {
      if (window.pageYOffset === 0 && item.name === "Наверх") {
        minRef = { ...item };
        break;
      }
      if (
        item.ref.getBoundingClientRect().bottom >= 0 &&
        item.ref.getBoundingClientRect().top >= 0 &&
        item.name !== "Наверх"
      ) {
        minRef = item;
        break;
      }
    }
    if (minRef) dispatch(setMin(minRef));
  }
};

export default { getMin, setMin };
