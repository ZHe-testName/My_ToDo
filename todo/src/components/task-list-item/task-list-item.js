import React, {Component} from 'react';

import './task-list-item.css';

export default class TaskListItem extends Component{
    render(){
        const {description, create, onDestroy, onCheck, checked} = this.props;

        return (
            <div className='view'>
                <input  
                    className='toggle'
                    type='checkbox'
                    onChange={onCheck}
                    //свойство передается сответственно актуального стейта в ручную
                    //для исправления бага с галочкой compleated
                    //при фильтрации заданий
                    
                    //баг возник из-за своеобразного присвоения css стилей
                    //думаю есть вариант пофиксить через css
                    checked={checked} />

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
