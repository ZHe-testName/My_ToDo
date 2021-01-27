import React from 'react';
import TaskList from '../task-list/';

const Main  = ({tasks, destroyTask}) => {
    return (
        <main className='main'>
            <TaskList 
                tasksDescription={tasks}
                destroyTask={destroyTask} />
        </main>
    );
};

export default Main;