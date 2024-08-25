// src/redux/actions/widgetActions.js
// src/redux/actions/widgetActions.js
// src/redux/actions/widgetActions.js

export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET"; // New action type

export const addWidget = (widget) => ({
  type: ADD_WIDGET,
  payload: widget,
});

export const removeWidget = (widgetIndex) => ({
  type: REMOVE_WIDGET,
  payload: widgetIndex,
});


