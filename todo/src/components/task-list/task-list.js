import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TaskListItem from "../task-list-item";

import './task-list.css';

export default class TaskList extends Component {
    static defaultProps = {
        tasksDescription: [],
        destroyTask: () => {},
        setStatus: () => {},
        setNewTaskDescription: () => {},
        clickOnEdit: () => {},
    };
    
    static propTypes = {
        tasksDescription: PropTypes.arrayOf(PropTypes.object),
        destroyTask: PropTypes.func,
        setStatus: PropTypes.func,
        setNewTaskDescription: PropTypes.func,
        clickOnEdit: PropTypes.func,
    };

    onEnterHandler = (event) => {
        if (event.keyCode === 13){
            const {id} = event.target.parentNode;
            const val = event.target.value;
            const {setNewTaskDescription} = this.props;

            setNewTaskDescription(val, id);
        };
    }


    render(){
        const {tasksDescription, destroyTask, setStatus, clickOnEdit, setNewTaskDescription} = this.props;

        const tasksArr = tasksDescription.map(item => {
            const {id, ...taskItems} = item;

            let {className} = item;

            const editingInput = (className === 'editing') ? 
                <input 
                    className='edit' 
                    type='text' 
                    placeholder='Editing task'
                    onKeyDown={this.onEnterHandler} /> : 
                undefined;

            if (taskItems.checked){
                className += ' completed';
            };

            return (
                <li key={id} className={className} id={id}>
                    <TaskListItem 
                        {...taskItems}
                        setNewTaskDescription={setNewTaskDescription}
                        clickOnEdit={() => clickOnEdit(id)}
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
    }
};

