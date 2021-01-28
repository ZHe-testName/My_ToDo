import React from 'react';
import TaskList from '../task-list/';

const Main  = ({tasks, destroyTask, setStatus}) => {
    return (
        <main className='main'>
            <TaskList 
                tasksDescription={tasks}
                destroyTask={destroyTask}
                setStatus={setStatus} />
        </main>
    );
};

export default Main;