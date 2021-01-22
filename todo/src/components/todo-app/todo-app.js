import React from 'react';

import Header from '../header/';
import Main from '../main/';

// import ToDoList from '../todo-list/';
// import ItemStatusFilter from '../item-status-filter/';

import './todo-app.css';

const ToDoApp = () => {
    const taskData = [
        {description: 'Complete task', create: 'created 17 min ago', className: 'completed', id: 1},
        {description: 'Editing task', create: 'created 17 min ago', className: 'editing', id: 2},
        {description: 'Active task', create: 'created 5 min ago', className: '', id: 3},
    ];
    // const todoData = [
    //     {label: 'Drink Coffe', important: false, id: 1},
    //     {label: 'Make Awesome App', important: true, id: 2},
    //     {label: 'Have a lunch', important: false, id: 3}
    // ];

    return (
        <div className='todo-app'>
            <Header />
            <Main tasks={taskData} />
            {/* <div className='top-panel d-flex'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            
            <ToDoList todos={todoData} /> */}
        </div>
    );
};

export default ToDoApp;