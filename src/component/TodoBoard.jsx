import React from "react";
import TodoItem from "./TodoItem";


const TodoBaord =({todoList, onDelete})=>{
    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map(item=>(
                <TodoItem todoItem={item} onDelete={onDelete} key={item.id}/>
            ))}
        </div>
    )
}

export default TodoBaord