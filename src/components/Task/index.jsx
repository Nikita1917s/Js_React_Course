import React from 'react';
import './style.css'

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            available: true
        }
        this.finished = this.finished.bind(this)
    }

    finished() {
        console.log(this)
        this.setState({
            available: !this.state.available
        })
    }


    //Render New Tasks
    render() {
        const { id, name } = this.props
        const { available } = this.state
        return (
            <li id={id} className={`list__added ${!available && 'finished'}`}>
                <p>{name}</p>
                <div className="actions">
                    <div className="done" onClick={this.finished}></div>
                    <div className="delete"></div>
                </div>
            </li>
        )
    }
}

export default Task
