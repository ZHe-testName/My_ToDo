import React from 'react';
import TaskList from "../task-list";

import './main.css';

const Main  = ({tasks, destroyTask, setStatus, clickOnEdit, setNewTaskDescription}) => (
        <main className='main'>
            <TaskList 
                tasksDescription={tasks}
                destroyTask={destroyTask}
                setStatus={setStatus}
                clickOnEdit={clickOnEdit}
                setNewTaskDescription={setNewTaskDescription} />
        </main>
    );

export default Main;