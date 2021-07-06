import { combineReducers } from "redux";
import infoReducer from "./infoSlice";

const rootReducer = combineReducers({
  info: infoReducer,
});

export default rootReducer;
