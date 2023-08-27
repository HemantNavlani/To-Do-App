import { useState } from 'react';
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import ToDoList from './components/ToDoList/ToDoList'
import ToDoContext from './context/ToDoContext';


function App() {

  const [list,setList] = useState( [
    {id:1,todoData:'todo1',finished:false},
    {id:2,todoData:'todo2',finished:true},
  ]);


  return (

    <ToDoContext.Provider value={{list,setList}}>
    <AddToDo updateList={(todo)=>setList([...list,{id:list.length+1,todoData:todo,finished:false}])}/>

    <ToDoList/>
    </ToDoContext.Provider>
  )
}

export default App
