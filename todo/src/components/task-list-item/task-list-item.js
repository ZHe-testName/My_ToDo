import React from 'react';
import './task-list-item.css';

const TaskListItem = ({description = 'No description', create = 'No time'}) => {
    return (<div className='view'>
                <input  
                    className='toggle'
                    type='checkbox' />

                <label>
                    <span
                        className='description'>{description}</span>
                    <span
                        className='created'>{create}</span>
                </label>

                <button
                    className='icon icon-edit'>
                </button>

                <button
                    className='icon icon-destroy'>
                </button>
            </div>);
}; 

export default TaskListItem;