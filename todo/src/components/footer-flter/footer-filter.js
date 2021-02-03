import React, {Component} from 'react';

import './footer-filter.css';

export default class Filter extends Component {
    clickOnFilter = (event) => {
        this.props.filterClick(event);
    }

    render(){
        const buttonsArr = this.props.filterButtons.map(elem => {
            const {id, description, className} = elem;

            return(
                <li key={id}>
                    <button id={id}
                            className={className}>{description}</button>
                </li>
            );
        });

        return (
            <ul className='filters'
                onClick={this.clickOnFilter}>
                    {buttonsArr}
            </ul>
        );
    }
};