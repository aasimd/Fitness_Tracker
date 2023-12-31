import { createStore, applyMiddleware } from "redux";
import { fitnessTrackerReducer } from "./reducer";
import thunk from "redux-thunk";
export const store = createStore(
  fitnessTrackerReducer,
  applyMiddleware(thunk) &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
