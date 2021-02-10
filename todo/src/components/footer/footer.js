import React from 'react';
import PropTypes from 'prop-types';

import Filter from "../footer-flter";
import './footer.css';

const Footer = ({uncheckedAmount, clearCompleted, filterClick, filterButtons}) => {
    const countText = `${uncheckedAmount} item left`;
    
    return (
        <footer className='footer'>
            <span className='todo-count'>{countText}</span>

            <Filter 
                    filterClick={filterClick}
                    filterButtons={filterButtons}/>

            <button className='clear-completed'
                    type='button'
                    onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

Footer.defaultProps = {
    uncheckedAmount: 0,
    clearCompleted: () => {},
    filterClick: () => {},
    filterButtons: [],
};

Footer.propTypes = {
    uncheckedAmount: PropTypes.number,
    clearCompleted: PropTypes.func,
    filterClick: PropTypes.func,
    filterButtons: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;