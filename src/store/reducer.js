import { combineReducers } from "redux";
import distance from "./reducers/distanceReducer";
import refs from "./reducers/refsReducer";

const rootReducer = combineReducers({ refs, distance });

export default rootReducer;
