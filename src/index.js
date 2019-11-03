import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
  { id: 3, message: "Blabla", likesCount: 11 },
  { id: 4, message: "Dada", likesCount: 11 }
];

ReactDOM.render(
  <Router>
    <App posts={posts} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
