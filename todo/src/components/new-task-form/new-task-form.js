import React, {Component} from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {
    state = {
        inputVale: ''
    }

    onAddTask = (event) => {
        event.preventDefault();

        this.props.onCreateItem(this.state.inputVale);

        this.setState({
            inputVale: ''
        });
    }

    onInputChange = (event) => {
        this.setState({
            inputVale: event.target.value
        });
    }

    render(){
        return (
            <form
                onSubmit={this.onAddTask}>

                <input className='new-todo' 
                        placeholder='What needs to be done?'
                        onChange={this.onInputChange}
                        value={this.state.inputVale} 
                        autoFocus />

            </form>
        );
    }
};
