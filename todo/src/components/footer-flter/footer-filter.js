import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './footer-filter.css';

export default class Filter extends Component {
    static defaultProps = {
        filterClick: () => {},
        filterButtons: [],
    }

    static propTypes = {
        filterClick: PropTypes.func,
        filterButtons: PropTypes.arrayOf(PropTypes.object),
    }
    
    clickOnFilter = (event) => {
        const {filterClick} = this.props;

        filterClick(event);
    }

    render(){
        const {filterButtons} = this.props;

        const buttonsArr = filterButtons.map(elem => {
            const {id, description, className} = elem;

            return(
                <li key={id}>
                    <button id={id}
                            type='button'
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