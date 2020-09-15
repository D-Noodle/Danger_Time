import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import thunk from 'redux-thunk'
import './style.css'

import { Provider } from "react-redux";
import store from "./store";


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
