import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Switch } from "react-router-dom";

function App({ posts }) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-conten">
        <Switch>
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
