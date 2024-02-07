import React from "react";

const TodoCategoly=({check})=>{
    return (
        <div>
            <input type="checkbox" value="운동" onChange={(event)=>check(event.target.value, event.target.checked)}></input>운동
            <input type="checkbox" value="여가" onChange={(event)=>check(event.target.value, event.target.checked)}></input>여가
            <input type="checkbox" value="출근" onChange={(event)=>check(event.target.value, event.target.checked)}></input>출근
        </div>
    )
}

export default TodoCategoly