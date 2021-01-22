import React from 'react';
import TaskListItem from '../task-list-item/';

import './task-list.css';

const TaskList = ({tasksDescription}) => {
    const tasksArr = tasksDescription.map(item => {
        const {id, className, ...taskItems} = item;

        const editingInput = (className === 'editing') ? 
            <input className='edit' type='text' defaultValue='Editing task'></input> : 
            void 0;
  
        return (
            <li key={id} className={className}>
                <TaskListItem {...taskItems} />
                {editingInput}
            </li>
        );
    });

    return (
        <ul className='todo-list'>
            {tasksArr}
        </ul>
    );
};

export default TaskList;