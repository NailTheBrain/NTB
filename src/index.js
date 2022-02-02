import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css"
import "./responsive.css"

ReactDOM.render(<Router basename="/sa"><App/></Router>, document.getElementById("root"));
// basename = "/sa";