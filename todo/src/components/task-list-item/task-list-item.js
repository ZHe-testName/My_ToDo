import React, {Component} from 'react';
import {formatDistanceToNow} from 'date-fns';

import './task-list-item.css';

export default class TaskListItem extends Component{
    render(){
        const {description, create, onDestroy, onCheck, checked, clickOnEdit} = this.props;

        const timeFromCreation = formatDistanceToNow(create, {includeSeconds: true});
        
        return (
            <div className='view'>
                <input  
                    className='toggle'
                    type='checkbox'
                    onChange={onCheck}
                    // свойство передается сответственно актуального стейта в ручную
                    // для исправления бага с галочкой compleated
                    // при фильтрации заданий
                    
                    // баг возник из-за своеобразного присвоения css стилей
                    // думаю есть вариант пофиксить через css
                    checked={checked} />

                <label>
                    <span
                        className='description'>{description}</span>
                    <span
                        className='created'>{timeFromCreation}</span>
                </label>

                <button
                    type='button'
                    className='icon icon-edit'
                    onClick={clickOnEdit} />

                <button
                    type='button'
                    className='icon icon-destroy'
                    onClick={onDestroy} />
            </div>);
    };
}; 
