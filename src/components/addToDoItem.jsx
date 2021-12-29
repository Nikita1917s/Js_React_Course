import React, { useState } from "react";
import { userName } from "../ToDoMain";

function AddToDoItem({ id, checked, text }) {
    const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem(userName)));
    const [checkedItem, setChecked] = useState(checked);

    function checkItem () {
        let position = toDoList.findIndex((elem) => elem.id===id)
        let changed = toDoList
        changed[position].checked = true
        setToDoList(changed)
    }

    return (
        <li id={id} className={`list__added ${checkedItem && 'finished'}`}>
            <p>{text}</p>
            <div className="actions">
                <div className="done"
                    onClick={() => (setChecked(!checkedItem), checkItem())}
                ></div>
                <div className="delete"></div>
            </div>
        </li>
    );
}

export default AddToDoItem;