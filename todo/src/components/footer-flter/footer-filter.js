import React from 'react';

import './footer-filter.css';

const Filter = () => {
    return (
        <ul className='filters'>
            <li>
                <button  className='selected'>All</button>
            </li>

            <li>
                <button>Active</button>
            </li>

            <li>
                <button>Completed</button>
            </li>
        </ul>
    );
};

export default Filter;