import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Projects from "./Projects/Projects";
import Settings from "./Settings/Settings";
import Tasks from "./Tasks/Tasks";

import "./App.scss";


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="App">
          <menu>

            <div>profile</div>
            <div>toggle</div>

            <Link to="Tasks">Tasks</Link>
            <Link to="Projects">Projects</Link>
            <Link to="Settings">Settings</Link>
            
          </menu>

          <content>
            <Routes>
              <Route path="Tasks" element={<Tasks />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Settings" element={<Settings />} />
            </Routes>
          </content>
        </div>
    );
  }

};