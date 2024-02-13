import React from "react";
import TodoItem from "./TodoItem";


const TodoBaord =({todoList, onDelete, boardType})=>{
    return (
        todoList ?
        <div>
            {boardType === 'todo' ? <h1>Todo List</h1> : <h1>Past List</h1>}
            {todoList.map(item=>(
                <TodoItem todoItem={item} onDelete={onDelete} key={item.id}/>
            ))}
        </div>
        : <></>
    )
}

export default TodoBaord