import React, {Component} from 'react';

import './footer-filter.css';

export default class Filter extends Component {
    clickOnFilter = (event) => {
        this.props.filterClick(event);
    }

    setSelect = (event) => {
        event.target.className = 'selected';
    }
    //selected

    render(){
        return (
            <ul className='filters'
                                    onClick={this.clickOnFilter}>
                <li>
                    <button id='1'
                            className=''
                            onClick={this.setSelect}>All</button>
                </li>

                <li>
                    <button id='2'
                            className=''
                            onClick={this.setSelect}>Active</button>
                </li>

                <li>
                    <button id='3'
                            className=''
                            onClick={this.setSelect}>Completed</button>
                </li>
            </ul>
        );
    }
};