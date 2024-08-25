import { createStore, combineReducers } from "redux";
import widgetReducer from "./reducers/widgetReducer";

const rootReducer = combineReducers({
  widgetReducer, // Add your widget reducer here
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
