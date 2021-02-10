import React, {Component} from 'react';

import Header from "../header";
import Main from "../main";
import Footer from '../footer';

import './todo-app.css';

export default class ToDoApp extends Component{
    minId = 100;

    state = {
        taskData: [
            // {description: 'Complete task', create: 'created 17 min ago', className: '', checked: false, id: 1},
            // {description: 'Editing task', create: 'created 17 min ago', className: 'editing', checked: false, id: 2},
            // {description: 'Active task', create: 'created 5 min ago', className: '', checked: false, id: 3},
        ],

        filterButtons: [
            {description: 'All', className: 'selected', id: 1},
            {description: 'Active', className: '', id: 2},
            {description: 'Complete', className: '', id: 3}
        ]
    }  

    // Спросить нормальное ли решение
    cloneObject = (obj) => JSON.parse(JSON.stringify(obj));
    
    clickOnCheckBox = (id) => {
        this.setState(({taskData}) => {
            const newTaskData = taskData.map(item => {
                const newItem = item;

                if (id === newItem.id){
                    newItem.checked = !newItem.checked;
                };

                return newItem;
            });

            return {
                taskData: newTaskData
            };
        });
    }

    createTask = (text) => {
        const newItem = {
            description: text,
            create: Date.now(),
            className: '',
            checked: false,
            id: this.minId += 1,
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

    clearCompleted = () => {
        this.setState(({taskData}) => {
            const uncompletedArr = taskData.filter(item => !item.checked);

            return {
                taskData: uncompletedArr
            };
        });
    }

    filterClick = (event) => {
        const {filterButtons} = this.state;

        const newButtonsArr = filterButtons.map(elem => {
            const newElem = this.cloneObject(elem);

            const className = (newElem.id === +event.target.id) ? 'selected' : '';

            newElem.className = className;

            return newElem;
        });

        this.setState(() => ({
                filterButtons: newButtonsArr
        }));
    }

    filterItems = (buttonsArr) => {
        const idOfSelectedFilter = buttonsArr.filter(el => el.className)[0].id;

        const {taskData} = this.state;

        if (idOfSelectedFilter === 1) {
            return taskData;
        };

        if (idOfSelectedFilter === 2) {
            return taskData.filter(elem => !elem.checked);
        };

        if (idOfSelectedFilter === 3) {
            return taskData.filter(elem => elem.checked);
        };

        return undefined;
    }

    clickOnEdit = (id) => {
        this.setState(({taskData}) => {
            const newTaskData = taskData.map(item => {
                const newItem = this.cloneObject(item);

                if (id === newItem.id){
                    newItem.className = 'editing';
                };

                return newItem;
            });

            return {
                taskData: newTaskData
            };
        });
    }

    setNewTaskDescription = (newValue, id) => {
        this.setState(({taskData}) => {
            const newTaskData = taskData.map(item => {
                const newItem = this.cloneObject(item);

                if (+id === newItem.id){
                    newItem.className = '';

                    newItem.description = newValue;
                };

                return newItem;
            });

            return {
                taskData: newTaskData
            };
        });
    }

    render(){
        const {taskData, filterButtons} = this.state;

        const uncheckedItemsAmmount = taskData
                                                .filter(item => !item.checked)
                                                .length;

        const filteredItemsArr = this.filterItems(filterButtons);

                                                        
        return (
            <div className='todo-app'>
                <Header 
                    onCreateTask={this.createTask}/>
                <Main 
                    tasks={filteredItemsArr}
                    destroyTask={this.destroyTask}
                    setStatus={this.clickOnCheckBox}
                    clickOnEdit={this.clickOnEdit}
                    setNewTaskDescription={this.setNewTaskDescription} />
                <Footer 
                        uncheckedAmount={uncheckedItemsAmmount}
                        clearCompleted={this.clearCompleted}
                        filterClick={this.filterClick}
                        filterButtons={filterButtons}/>
            </div>
        );
    }
};
