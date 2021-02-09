import React from 'react';

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

export default Footer;