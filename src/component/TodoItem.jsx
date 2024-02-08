import React from "react";

const TodoItem =({todoItem, onDelete})=>{
    const {id, text, selectedDate} = todoItem
    return(
        <div className="todo-item">
            {text}<br/>
            {selectedDate}<br/>
            {todoItem.categoly.map(check=>(
                check.checkVal
            )).join(', ')}
            <button onClick={()=>onDelete(id)}>삭제</button>
        </div>
    )
}

export default TodoItem
