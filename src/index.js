import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./globalStyles.css";
import MainApp from "./components/mainApp/mainApp";

ReactDOM.render(
    <Router>
      <MainApp />
    </Router>,
  document.getElementById("root")
);
