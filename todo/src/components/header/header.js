import React from 'react';
import './header.css';

const Header = ({toDo, done}) => {
    return (
        <header className='header'>
            <h1>todos</h1>
            {/* <NewTaskForm /> */}
        </header>
    );
};

export default Header;