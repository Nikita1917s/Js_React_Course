import React from 'react';
import './style.css'

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            //tasks: this.state.tasks.concat({ name: this.state.text, available: isAvailable })
        }
    }

    //Render New Tasks
    render() {
        const { name, available } = this.props
        return (
            <li className={`list__added ${!available && 'finished'}`}>
                <p>{name}</p>
                <div className="actions">
                    <div className="done"></div>
                    <div className="delete"></div>
                </div>
            </li>
        )
    }
}

export default Task
