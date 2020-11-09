import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = [thunk];

let store;

if (process.env.NODE_ENV !== "production") {
  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  store = createStore(reducer, applyMiddleware(...middleware));
}

export default store;
