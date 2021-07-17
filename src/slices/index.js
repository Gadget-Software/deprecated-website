import { combineReducers } from "redux";
import businessReducer from "./businessSlice";

const rootReducer = combineReducers({
  business: businessReducer,
});

export default rootReducer;
