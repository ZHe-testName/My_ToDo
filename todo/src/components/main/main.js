import React from 'react';
import PropTypes, { func } from 'prop-types';

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

Main.defaultProps = {
    tasks: [],
    destroyTask: () => {},
    setStatus: () => {},
    clickOnEdit: () => {},
    setNewTaskDescription: () => {},
};

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    destroyTask: PropTypes.func,
    setStatus: PropTypes.func,
    clickOnEdit: PropTypes.func,
    setNewTaskDescription: func,
};

export default Main;