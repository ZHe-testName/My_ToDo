import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class NewTaskForm extends Component {
    static defaultProps = {
        onCreateItem: () => {},
    };

    static propTypes = {
        onCreateItem: PropTypes.func,
    };

    state = {
        inputVale: ''
    }

    onAddTask = (event) => {
        event.preventDefault();

        const {onCreateItem} = this.props;
        const {inputVale} = this.state;

        onCreateItem(inputVale);

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
        const {inputVale} = this.state;

        return (
            <form
                onSubmit={this.onAddTask}>

                <input className='new-todo' 
                        placeholder='What needs to be done?'
                        onChange={this.onInputChange}
                        value={inputVale} />

            </form>
        );
    }
};
