// import { useReducer } from 'react';
import { useDispatch } from 'react-redux'
import './App.css'
import AddToDo from './components/AddToDo/AddToDo'
import ToDoList from './components/ToDoList/ToDoList'
import { bindActionCreators } from 'redux'
// import ToDoContext from './context/ToDoContext';
// import ToDoDispatchContext from './context/ToDoDispatchContext';
// import todoReducer from './reducers/todoReducers';

import { addTodo,deleteTodo,editTodo,todoFinished } from './actions/todoActions'

function App() {
const dispatch = useDispatch()

const actions = bindActionCreators({ addTodo,deleteTodo,editTodo,todoFinished }, dispatch )


  // const [list,dispatch] = useReducer(todoReducer,[])

  return (

    // <ToDoContext.Provider value={{list}}>
      // <ToDoDispatchContext.Provider value={{dispatch}}>
    <>
    <AddToDo addTodo={actions.addTodo}/>
    <ToDoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
    </>
    // </ToDoDispatchContext.Provider>
    // </ToDoContext.Provider>
  )
}

export default App
