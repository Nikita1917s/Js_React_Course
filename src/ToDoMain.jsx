import InputText from "./components/InputText";
import ButtonTest from "./components/Button";
import TodoList from "./components/ToDoList";
import { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './App.css';

const userName = prompt('Your name please');
!localStorage.getItem(userName) && localStorage.setItem(userName, `[]`);

function ToDoMain() {
    const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem(userName)));
    const [toDoItem, setToDoItem] = useState('');

    useEffect(() => {
        console.log(toDoList)
        localStorage.setItem(userName, JSON.stringify(toDoList))
    }, [toDoList])


    return (
        <div className='todo'>
            <InputText value={toDoItem} change={setToDoItem} />
            <ButtonTest value={toDoItem} reset={setToDoItem} checked={''} addTo={toDoList} addHow={setToDoList} />
            <div className="list__block">
                <ol className="todo__list">
                    <TodoList changeItem={setToDoList} toDoList={toDoList} />
                </ol>
            </div>
        </div>
    );
}

export default ToDoMain;
export {userName}