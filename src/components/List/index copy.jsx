import React from 'react';
import './style.css'
import CustomInput from "../CustomInput/"
import Task from "../Task/"

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            tasks: []
        }
        this.changeText = this.changeText.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    // Change text in Input
    changeText(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    //Add Task info to array
    addTask() {
        this.setState({
            tasks: this.state.tasks.concat({ name: this.state.text })
        })
        console.log(this.state.tasks)
    }

    // clearValue() {
    //     this.setState({
    //         text: ''
    //     })
    // }

    //Render Tasks list
    render() {
        return (
            <div className="todo">
                <CustomInput type={'text'} change={(e) => this.changeText(e, 'text')} />
                <button onClick={(isAvailable) => { this.addTask(true)}}>Add to the list</button>
                <div className="list__block">
                    <ol className="todo__list">
                        {this.state.tasks.map(function (el) {
                            return <Task name={el.name} />
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default List
//available={el.available}