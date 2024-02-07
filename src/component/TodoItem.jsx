import React from "react";

const TodoItem =({todoItem, checkList, onDelete})=>{
    const {id, text} = todoItem
    return(
        <div className="todo-item">
            {text}<br/>{checkList.map(check=>(
                check.checkVal
            ))}
            <button onClick={()=>onDelete(id)}>삭제</button>
        </div>
    )
}

export default TodoItem
