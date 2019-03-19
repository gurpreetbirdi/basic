import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {childReducer} from "./action/Child.action";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(childReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
