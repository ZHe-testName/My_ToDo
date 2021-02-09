import React from 'react';

import NewTaskForm from "../new-task-form";

import './header.css';

const Header = ({onCreateTask}) => (
        <header className='header'>
            <h1>todos</h1>

            <NewTaskForm 
                onCreateItem={onCreateTask}/>

        </header>
    );

export default Header;