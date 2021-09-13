import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { freeSet, flagSet, brandSet } from "@coreui/icons";
import { logo } from "./assets/icons/logo";

import { Provider } from "react-redux";
import { store, persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";

React.icons = { ...freeSet, ...flagSet, ...brandSet, logo };
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
