import React from "react";

const TodoItem =({todoItem})=>{
    const {id, text} = todoItem
    return(
        <div className="todo-item">
            {text}<br/>
        </div>
    )
}

export default TodoItem
