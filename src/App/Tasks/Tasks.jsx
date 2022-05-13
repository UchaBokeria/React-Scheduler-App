import "./Tasks.scss";
import { Component } from 'react';


import Table from "../../Components/Table/Table";
import Search from "../../Components/Search/Search"
import Button from "../../Components/Button/Button";
import Selector from "../../Components/Selector/Selector";

export default class Tasks extends Component {

  constructor() {
    super();
  }

  data = [
    {
      id: 1,
      title: "title one ",
      description: "description one ",
      status: true,
      priority: "prio_one",
      date: "2022/01/20 14:23",
      project: "project one ",
    },
    {
      id:  2,
      title: "title two",
      description: "description two",
      status: false,
      priority: "prio_two",
      date: "2022/01/20 14:23",
      project:"project two",
    },
    {
      id: 3,
      title: "title three",
      description: "description three",
      status: true,
      priority: "prio_one",
      date: "2022/01/20 14:23",
      project:"project three",
    },
    {
      id: 4,
      title: "title four",
      description: "description four",
      status: false,
      priority: "prio_three",
      date: "2022/01/20 14:23",
      project:"project four",
    }
  ];
  
  status = (e) => {
    return  <button onClick={this.removeSelected} className="right">
                <i className="material-icons"> 
                  {
                    (e.status) ? 
                    'unpublished': 
                    'verified'
                  } 
                </i>
            </button>
  }

  priority = (e) => {
    console.log(e);
    return  <div className="prioContainer"><div className={"circle " + e.priority}></div></div>
  }

  datetime = (e) => {
    return <div>
            <div className="datetime"> {e.date}</div>
           </div>
  }

  render() {
    return (
        <div className="Tasks">
            <h1>Tasks</h1>
            <div>
              {
                <Table config={
                  {
                    data: this.data,
                    columns: [
                      {
                        name: "id",
                        title: "id",
                        hidden: true
                      },
                      {
                        name: "title",
                        title: "Title"
                      },
                      {
                        name: "description",
                        title: "Description"
                      },
                      {
                        name: "status",
                        title: "Status",
                        template: this.status
                      },
                      {
                        name: "priority",
                        title: "Priority",
                        template: this.priority
                      },
                      {
                        name: "date",
                        title: "Date",
                        template: this.datetime
                      },
                      {
                        name: "project",
                        title: "Project"
                      },
                    ]
                  }
                }/>
              }
            </div>
        </div>
    );
  }

};