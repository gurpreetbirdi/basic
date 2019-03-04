import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { handleInputReducer } from "./action/ReduxInput.action";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(handleInputReducer); //i created the store in with the create store function and passed\\
//  the reducer as an arguement

ReactDOM.render(
  //provider provide the store to the head of all the components
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
