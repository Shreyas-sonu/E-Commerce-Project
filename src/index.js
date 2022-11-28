import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
  )
