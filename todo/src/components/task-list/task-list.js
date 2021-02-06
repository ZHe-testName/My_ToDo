import React from 'react';
import PropTypes from 'prop-types';

import TaskListItem from '../task-list-item/';

import './task-list.css';

const TaskList = ({tasksDescription, destroyTask, setStatus}) => {
        const tasksArr = tasksDescription.map(item => {
            const {id, ...taskItems} = item;

            let {className} = item;
    
            const editingInput = (className === 'editing') ? 
                <input className='edit' type='text' defaultValue='Editing task'></input> : 
                void 0;

            if (taskItems.checked){
                className += ' completed';
            };

            return (
                <li key={id} className={className}>
                    <TaskListItem 
                        {...taskItems}
                        onDestroy={() => destroyTask(id)}
                        onCheck={() => setStatus(id)}/>
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

TaskList.defaultProps = {
    tasksDescription: [],
    destroyTask: () => {},
    setStatus: () => {}
};

TaskList.propTypes = {
    tasksDescription: PropTypes.arrayOf(PropTypes.object),
    destroyTask: PropTypes.func,
    setStatus: PropTypes.func
};

export default TaskList;