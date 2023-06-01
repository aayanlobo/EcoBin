import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import Calendar from "./calendar";

function CalenderWarp() {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}

export default CalenderWarp;
