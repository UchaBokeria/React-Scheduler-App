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
        
        // TODO : fix , symbols while adding

        console.log(`this.columnNames`, this.columnNames);
        var newOne = `<tr>
            ${this.columnNames.map( col =>
                col.hidden ? '' : 
                `<td className="${col.hidden ? 'hidden' : ''}">
                    <input className="newOnes" type="text" placeholder="${col.title}" />
                </td>`
            )}
        </tr>`;

        this.setState({acceptMode: true});
        var last = document.querySelector(".TableBody").innerHTML;
        document.querySelector(".TableBody").prepend(newOne);

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
                
                <button onClick={this.removeSelected} className="right">
                    <i className="material-icons">delete</i>
                </button>

                {
                    this.state.acceptMode ? 
                        <div>
                            <button onClick={this.acceptNewOne} className="right">
                                <i className="material-icons">done</i>
                            </button>

                            <button onClick={this.closeNewOne} className="right">
                                <i className="material-icons">close</i>
                            </button>
                        </div>
                    :
                        <button onClick={this.createNewOne} className="right">
                            <i className="material-icons">add_circle</i>
                        </button>
                }
                
                <button onClick={this.selectAll} className="">
                    <i className="material-icons">
                        {this.state.selectAll ? 'check_box_outline' : 'check_box_outline_blank'}
                    </i>
                </button>

                <button  className="">
                    <i className="material-icons">
                        unpublished
                    </i>
                </button>

                <button  className="">
                    <i className="material-icons">
                        verified
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
                                            col-value={data[item.name].toString()}
                                            col-title={data[item.title]}
                                            col-config={JSON.stringify(data)}>
                                            { 
                                                item.hasOwnProperty("template") ? 
                                                item.template(data)  : 
                                                data[item.name] 
                                            }
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