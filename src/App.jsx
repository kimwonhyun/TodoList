import './App.css';
import React, {useCallback, useRef, useState} from 'react';
import TodoBaord from './component/TodoBoard';
import TodoCategoly from './component/TodoCategoly';

const App =()=> {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const [checkList, setCheckList] = useState([])
  const nextId = useRef(0)

  const addItem =()=>{
    const todo = {id:nextId.current, text:inputValue}
    nextId.current += 1
    setTodoList([...todoList,todo])
  }

  const onDelete = (id) =>{
    console.log(id)
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const check = (checkVal, checked) =>{
    console.log(checkVal,checked)
    checked ? setCheckList([...checkList,{checkVal}]) : setCheckList(checkList.filter((checkVal) => checkVal !== checkVal))
    // setCheckList?
    console.log(checkList)
  }

  console.log(todoList)

  return (
   <main>
    <input type="text" onChange={(event)=>setInputValue(event.target.value)}/>
    <button onClick={addItem}>추가</button>
    <TodoCategoly check={check}/>
    <TodoBaord todoList={todoList} checkList={checkList} onDelete={onDelete}/>
   </main>
  );
}

export default App;
