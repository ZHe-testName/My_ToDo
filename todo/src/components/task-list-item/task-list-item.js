import React, {Component} from 'react';

import './task-list-item.css';

export default class TaskListItem extends Component{
    render(){
        const {description, create, onDestroy} = this.props;

        return (
            <div className='view'>
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
                    className='icon icon-destroy'
                    onClick={onDestroy}>
                </button>
            </div>);
    };
}; 
