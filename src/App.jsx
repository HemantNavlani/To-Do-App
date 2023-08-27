import { useState } from 'react';
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import ToDoList from './components/ToDoList/ToDoList'

function App() {
  const [list,setList] = useState( [
    {id:1,todoData:'todo1',finished:false},
    {id:2,todoData:'todo2',finished:true},
]);

  return (
    <>
    <AddToDo updateList={(todo)=>setList([...list,{id:list.length+1,todoData:todo,finished:false}])}/>

    <ToDoList list={list} updateList={setList}/>
    </>
  )
}

export default App
