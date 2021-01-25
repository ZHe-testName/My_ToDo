import React from 'react';

import Header from '../header/';
import Main from '../main/';
import Footer from '../footer';

import './todo-app.css';

const ToDoApp = () => {
    const taskData = [
        {description: 'Complete task', create: 'created 17 min ago', className: 'completed', id: 1},
        {description: 'Editing task', create: 'created 17 min ago', className: 'editing', id: 2},
        {description: 'Active task', create: 'created 5 min ago', className: '', id: 3},
    ];
    return (
        <div className='todo-app'>
            <Header />
            <Main tasks={taskData} />
            <Footer />
        </div>
    );
};

export default ToDoApp;