import React from 'react';
import TaskList from '../task-list/';

const Main  = ({tasks}) => {
    return (
        <main className='main'>
            <TaskList tasksDescription={tasks} />
        </main>
    );
};

export default Main;