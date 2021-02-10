import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatDistanceToNow} from 'date-fns';

import './task-list-item.css';

export default class TaskListItem extends Component{
    static defaultProps = {
        description: 'No description',
        create: 0,
        checked: false,
        onDestroy: () => {},
        onCheck: () => {},
        clickOnEdit: () => {},
    }

    static propTypes = {
        description: PropTypes.string,
        create: PropTypes.number,
        checked: PropTypes.bool,
        onDestroy: PropTypes.func,
        onCheck: PropTypes.func,
        clickOnEdit: PropTypes.func,
    }

    render(){
        const {description, create, onDestroy, onCheck, checked, clickOnEdit} = this.props;

        const timeFromCreation = formatDistanceToNow(create, {includeSeconds: true});
        
        return (
            <div className='view'>
                <input  
                    className='toggle'
                    type='checkbox'
                    onChange={onCheck}
                    // свойство передается сответственно актуального стейта
                    // для исправления бага с галочкой compleated при фильтрации заданий
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
