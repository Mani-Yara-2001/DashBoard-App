// src/redux/reducers/widgetReducer.js

import { ADD_WIDGET, REMOVE_WIDGET } from "../actions/widgetActions";

const initialState = {
  widgets: [],
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        widgets: [...state.widgets, action.payload],
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default widgetReducer;

