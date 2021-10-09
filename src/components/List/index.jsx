import React from 'react';
import './style.css'
import CustomInput from "../CustomInput/"
import Task from "../Task/"
let userName, toCheck;

let setUserName = () => {
    userName = prompt('Enter your name')
    toCheck = JSON.parse(localStorage.getItem(userName))
}
setUserName()

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            tasks: []
        }
        this.changeText = this.changeText.bind(this)
        this.addTask = this.addTask.bind(this)
        this.clearValue = this.clearValue.bind(this)
    }

    // Change text in Input
    changeText(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    //Add Task info to array
    addTask() {

        //Check in not empty
        if (this.state.text !== '') {
            this.setState({
                tasks: this.state.tasks.concat({ id: this.state.tasks.length, name: this.state.text, available: true })
            })

            //Add to Local Storage
            toCheck = JSON.parse(localStorage.getItem(userName))
            if (!toCheck) {
                localStorage.setItem(userName, JSON.stringify([]))
            } else {
                toCheck.push({ id: this.state.tasks.length, name: this.state.text, available: true })
            }
            localStorage.setItem(userName, JSON.stringify(toCheck))
        }
    }

    clearValue(e) {
        if (e === false) {
            this.setState({
                text: ''
            })
        }
    }

    //Render Tasks list
    render() {
        return (
            <div className="todo">
                <CustomInput type={'text'} value={this.state.text} clear={this.clearValue()} change={(e) => { this.changeText(e, 'text') }} />
                <button type="submit" onClick={(() => { this.addTask(true); this.clearValue(false) })}>Add to the list</button>
                <div className="list__block">
                    <ol className="todo__list">
                        {this.state.tasks.map(function (el) {
                            return <Task key={el.id} id={el.id} name={el.name} available={el.available} />
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default List