import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.scss";

import Tasks from "./Tasks/Tasks";
import Settings from "./Settings/Settings";
import Projects from "./Projects/Projects";

export default class App extends React.Component {
  toggleMenu = false;

  constructor() {
    super();

    this.state = {
      toggle: localStorage.getItem("toggleMenu") != '' && 
                localStorage.getItem("toggleMenu") != null ? 
                  localStorage.getItem("toggleMenu") : false ,
    };

  }

  toggle = (e) => {
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state.toggle);
    localStorage.setItem("toggleMenu", this.state.toggle);
  } 

  activateRoute = (e) => {
    document.querySelectorAll("menu a").forEach(item => item.classList.remove("activated"));
    e.target.parentNode.classList.add("activated");
  }

  render() {
    return (
        <div className="App">

          <menu className={ this.state.toggle ? 'maximize' : 'minimize' }>

            <a>
              { !this.state.toggle && <i className="material-icons aqua" onClick={ this.toggle }>menu</i> }
              { this.state.toggle && <i className="material-icons toggle" onClick={ this.toggle }>close</i> }
              { this.state.toggle && <pre><h1> Tasker</h1></pre> }
            </a>

            <Link to="Tasks" className="activated" onClick={this.activateRoute}>
              <i className="material-icons" >task_alt</i> 
              {this.state.toggle && <p>Tasks</p>}
            </Link>
            
            <Link to="Projects" onClick={this.activateRoute}>
              <i className="material-icons" >work</i> 
              {this.state.toggle && <p>Projects</p>}
            </Link>
            
            <Link to="Reports" onClick={this.activateRoute}>
              <i className="material-icons" >pie_chart</i> 
              {this.state.toggle && <p>Reports</p>}
            </Link>
            
            <Link to="Settings" onClick={this.activateRoute}>
              <i className="material-icons" >settings</i> 
              {this.state.toggle && <p>Settings</p>}
            </Link>
            
            <Link to="/">
              <img src={require('../Assets/Media/avatar.jpg')}  alt="Profile" />
            </Link>

          </menu>

          <section>
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="Tasks" element={<Tasks />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Settings" element={<Settings />} />
            </Routes>
          </section>

        </div>
    );
  }

};