import React from 'react';

import Filter from '../footer-flter/';
import './footer.css';

const Footer = ({uncheckedAmount, clearCompleted, filterClick}) => {
    const countText = `${uncheckedAmount} item left`;
    return (
        <footer className='footer'>
            <span className='todo-count'>{countText}</span>

            <Filter 
                    filterClick={filterClick}/>

            <button className='clear-completed'
                    onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
};

export default Footer;