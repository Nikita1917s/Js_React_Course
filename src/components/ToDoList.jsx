import React from 'react'
import AddToDoItem from './addToDoItem'

function TodoList({ toDoList, changeItem }) {
    return (
        toDoList.map(item => <AddToDoItem key={item.id} {...item} changeItem={changeItem} />)
    )
}
export default TodoList;