import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
