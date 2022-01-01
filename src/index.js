import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
//import Test from "./components/Test";
import store from "./app/store";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
      {/* <Test /> */}
    </Provider>
  </Router>,
  document.getElementById("root")
);
