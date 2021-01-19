import React from 'react';

import Header from '../header/';
// import SearchPanel from '../search-panel/';
// import ToDoList from '../todo-list/';
// import ItemStatusFilter from '../item-status-filter/';

import './todo-app.css';

const ToDoApp = () => {
    // const todoData = [
    //     {label: 'Drink Coffe', important: false, id: 1},
    //     {label: 'Make Awesome App', important: true, id: 2},
    //     {label: 'Have a lunch', important: false, id: 3}
    // ];

    return (
        <div className='todo-app'>
            <Header />
            {/* <div className='top-panel d-flex'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            
            <ToDoList todos={todoData} /> */}
        </div>
    );
};

export default ToDoApp;