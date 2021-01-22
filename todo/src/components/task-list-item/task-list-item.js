import React from 'react';
import './task-list-item.css';

//Используем спан чтобы сделать компонет более независимым
//и использовать его не только в ul(елси нужно конечно)
const TaskListItem = ({description = 'No description', create = 'No time'}) => {
    // const style = {
    //     color: important ? 'steelblue' : 'black',
    //     fontWeight: important ? 'bold' : 'normal'
    // };

    return (<div className='view'>
                {/* <span 
                    className='todo-list-item-label'
                    style={style}>{label}</span> */}
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