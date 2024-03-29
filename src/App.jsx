import './App.css';
import React, {useRef, useState, useEffect} from 'react';
import TodoBaord from './component/TodoBoard';
import TodoCategoly from './component/TodoCategoly';
import DatePicker from 'react-datepicker'
import {ko} from 'date-fns/esm/locale'

import 'react-datepicker/dist/react-datepicker.css'

const App =()=> {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const [tobeList, setTobeList] = useState([])
  const [pastList, setPastList] = useState([])
  const [categoly, setCategoly] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const nextId = useRef(0)

  const addItem =()=>{
    const todo = {id:nextId.current, text:inputValue, categoly:categoly, selectedDate: dateToString(selectedDate)}
    nextId.current += 1
    setTodoList([...todoList,todo])
  }

  useEffect(()=>{
    const today = dateToString(new Date())
    console.log(today)
    if(todoList){
      const tobeList = todoList.filter((todo) => new Date(todo.selectedDate) >= new Date(today))
      .sort((a,b) => new Date(a.selectedDate) - new Date(b.selectedDate))

      const pastList = todoList.filter((todo) => new Date(todo.selectedDate) < new Date(today))
      .sort((a,b) => new Date(b.selectedDate) - new Date(a.selectedDate))
      setTobeList(tobeList)
      setPastList(pastList)
    }
  },[todoList])

  const onDelete = (id) =>{
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const check = (checkVal, checked) =>{
    checked ? setCategoly([...categoly,{checkVal}]) : setCategoly(categoly.filter((categoly) => categoly.checkVal !== checkVal))
  }

  const dateToString = (date) => {
    return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
  }

  return (
   <main>
    <input type="text" onChange={(event)=>setInputValue(event.target.value)}/>
    <DatePicker 
      dateFormat='yyyy-MM-dd'
      locale={ko}
      // dateFormat='yyyy-MM-dd hh:mi:ss'
      shouldCloseOnSelect
      selected={selectedDate}
      onChange={(date)=>setSelectedDate(date)}
    />
    <button onClick={addItem}>추가</button>
    <TodoCategoly check={check}/>
    <TodoBaord todoList={tobeList} onDelete={onDelete} boardType='todo'/>
    <TodoBaord todoList={pastList} onDelete={onDelete} boardType='past'/>
   </main>
  );
}

export default App;
