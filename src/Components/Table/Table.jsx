import "./Table.scss";
import axios from 'axios';
import { Component } from 'react';


export default class Table extends Component {

    dataBound = [];
    columnNames = [];

    constructor(props) {
        super(props);

        this.columnNames = props.dataset.columns;
        this.dataBound = props.dataset.data;

        console.log({
            columnNames: this.columnNames,
            dataBound: this.dataBound
        });

        this.dataBound == null && this.runRequest();
    }

    runRequest() {

    }

    render() {
        return (
            <div className="Table">

                <div className="TableHeader">

                    <div className="TableHeaderRow">
                        { 
                            this.columnNames.map((col) => { 
                                return <div key={col} className="th" col-name={col}> {col} </div>
                            })
                        }
                    </div>

                    <div className="TableHeaderSearch">
              
                    </div>

                </div>

                <div className="TableBody">
                    {
                        this.dataBound.map(data => {
                            return (
                                <div className="tr">
                                    {
                                        this.columnNames.map((item) => { 
                                            console.log(data[item]);
                                            return <div  key={data["id"]}
                                                        className="td"
                                                        col-name={item}
                                                        col-value={data[item]}
                                                        col-dataset={JSON.stringify(data)}>
                                                        {data[item]}
                                                    </div>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}