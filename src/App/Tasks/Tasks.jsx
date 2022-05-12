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
      name: "as",
      age: 11
    },
    {
      id: 2,
      name: "as 1",
      age: 12
    },
    {
      id: 3,
      name: "as 2",
      age: 13
    }
  ];

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
                        title: "Num",
                        hidden: true
                      }, 
                      {
                        name: "name",
                        title: "Title",
                        hidden: false
                      }, 
                      {
                        name: "age",
                        title: "Age"
                      }
                    ]
                  }
                }/>
              }
            </div>
        </div>
    );
  }

};