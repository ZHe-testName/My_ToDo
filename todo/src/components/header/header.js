import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from "../new-task-form";

import './header.css';

const Header = ({onCreateTask}) => (
        <header className='header'>
            <h1>todos</h1>

            <NewTaskForm 
                onCreateItem={onCreateTask}/>

        </header>
);

Header.propTypes = {
    onCreateTask: PropTypes.func,
};

Header.defaultProps = {
    onCreateTask: () => {},
};

export default Header;