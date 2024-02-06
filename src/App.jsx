import './App.css';
import React, {useCallback, useRef, useState} from 'react';
import TodoBaord from './component/TodoBoard';

const App =()=> {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const nextId = useRef(0)
  
  const addItem =()=>{
    const todo = {id:nextId.current, text:inputValue}
    nextId.current += 1
    setTodoList([...todoList,todo])
  }

  const onDelete = useCallback(
    (id) => {
      console.log(id)
      setTodoList(todoList.filter((todo) => todo.id !== id))
    },
    [todoList]
  )

console.log(todoList)

  return (
   <main>
    <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
    <button onClick={addItem}>추가</button>
    <TodoBaord todoList={todoList} onDelete={onDelete}/>
   </main>
  );
}

export default App;
