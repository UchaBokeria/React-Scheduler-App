import "./Table.scss";
import axios from 'axios';
import React, { Component } from 'react';

export default class Table extends React.Component  {
    selected = [];
    dataBound = [];
    columnNames = [];

    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            selectAll: false,
            acceptMode: false,
        };

        this.columnNames = props.config.columns;
        this.dataBound = props.config.data;

        this.dataBound == null && this.runRequest();
    }

    runRequest() {

    }

    createNewOne = () => {

        var newOne = `<tr>
            <td><input class="newOnes" type="text" placeholder="Title" /></td>
            <td><input class="newOnes" type="text" placeholder="Age" /></td>
        </tr>`;

        this.setState({acceptMode: true});
        var last = document.querySelector(".TableBody").innerHTML;
        document.querySelector(".TableBody").innerHTML = newOne + last;

    }

    acceptNewOne = () => {

        var newOne = ``;
        document.querySelectorAll("tbody .newOnes").forEach( (e) => newOne +=`<td>${e.value}</td>`);

        this.setState({acceptMode: false});
        document.querySelector("tbody tr").remove();

        var last = document.querySelector(".TableBody").innerHTML;
        document.querySelector(".TableBody").innerHTML = `<tr>${newOne}</tr>` + last;

    }

    closeNewOne = () => {
        document.querySelector("tbody tr").remove();
        this.setState({acceptMode: false});
    }

    removeSelected = () => {

        this.state.selectAll = false;
        this.state.selected.forEach(element => element.remove() );
        this.setState({ selected: this.state.selected });

    }

    selectAll = () => {

        if(!this.state.selectAll) 
            document.querySelectorAll("tbody tr").forEach(element => {
                element.classList.add("selected")
                this.state.selected.push(element) });
        

        else 
            this.state.selected.forEach(element => {
                element.classList.remove("selected")
                    this.state.selected = [] });

        this.setState({ 
            selectAll: !this.state.selectAll,
            selected: this.state.selected
        });

    } 

    select = (e) => {

        e.target.parentNode.classList.toggle("selected");
        if(e.target.parentNode.classList.contains("selected")) 
            this.state.selected.push(e.target.parentNode);
        else 
            this.state.selected.splice(this.state.selected.indexOf(e.target.parentNode), 1);

        this.setState({ selected: this.state.selected });
        
    }

    render() {
        return (
            <>
            
            <div className="Tools">
                {
                    this.state.acceptMode ? 
                        <div>
                            <button onClick={this.acceptNewOne}>
                                <i className="material-icons">done</i>
                            </button>

                            <button onClick={this.closeNewOne}>
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                    :
                        <button onClick={this.createNewOne}>
                            <i className="material-icons">add_circle</i>
                        </button>
                }
                
                <button onClick={this.removeSelected}>
                    <i className="material-icons">delete</i>
                </button>
                
                <button onClick={this.selectAll}>
                    <i className="material-icons">
                        {this.state.selectAll ? 'check_box_outline' : 'check_box_outline_blank'}
                    </i>
                </button>

            </div>

            <table className="Table">

                <thead className="TableHeader">

                    <tr className="TableHeaderRow">
                        {this.columnNames.map((col, index) => {
                            if (!col.hidden)
                                return <td key={index} className="th" col-name={col.name}> {col.title} </td>;
                        })}
                    </tr>

                    <tr className="TableHeaderSearch">

                    </tr>

                </thead>

                <tbody className="TableBody">
                    {this.dataBound.map((data, index) => {
                        return (
                            <tr className="tr" key={index} onClick={this.select}>
                                {this.columnNames.map((item, index) => {
                                    if (!item.hidden)
                                        return <td key={data["id"] + index}
                                            className="td"
                                            col-name={item.name}
                                            col-value={data[item.name]}
                                            col-title={data[item.title]}
                                            col-config={JSON.stringify(data)}>
                                            {data[item.name]}
                                        </td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>

            </table>
            </>
        );
    }
}