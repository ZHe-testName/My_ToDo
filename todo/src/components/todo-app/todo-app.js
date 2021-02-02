import React, {Component} from 'react';

import Header from '../header/';
import Main from '../main/';
import Footer from '../footer';

import './todo-app.css';

export default class ToDoApp extends Component{
    minId = 100;

    state = {
        taskData: [
            {description: 'Complete task', create: 'created 17 min ago', className: '', checked: false, id: 1},
            {description: 'Editing task', create: 'created 17 min ago', className: 'editing', checked: false, id: 2},
            {description: 'Active task', create: 'created 5 min ago', className: '', checked: false, id: 3},
        ]
    }  
    
    clickOnCheckBox = (id) => {
        this.setState(({taskData}) => {
            const newTaskData = taskData.map(item => {
                if (id === item.id){
                    item.checked = !item.checked;
                };

                return item;
            });

            return {
                taskData: newTaskData
            };
        });
    }

    createTask = (text) => {
        const newItem = {
            description: text,
            create: 'created 5 min ago',
            className: '',
            checked: false,
            id: this.minId++
        };

        this.setState(({taskData}) => {
            const newTaskArr = [
                ...taskData,
                newItem
            ];

            return {
                taskData: newTaskArr
            }
        });
    }

    destroyTask = (id) => {
        this.setState(({taskData}) => {
            // const deleteItemIndex = taskData.findIndex(item => item.id === id);

            // const newTaskData = [
            //     ...taskData.slice(0, deleteItemIndex),
            //     ...taskData.slice(deleteItemIndex + 1)
            // ];

            const newTaskData = taskData.filter(item => item.id !== id);

            return {
                taskData: newTaskData
            };
        });
    }

    render(){
        return (
            <div className='todo-app'>
                <Header 
                    onCreateTask={this.createTask}/>
                <Main 
                    tasks={this.state.taskData}
                    destroyTask={this.destroyTask}
                    setStatus={this.clickOnCheckBox} />
                <Footer />
            </div>
        );
    }
};
