// import { useDispatch, useSelector } from "react-redux"
import {  useSelector } from "react-redux"

import ToDo from "../ToDo/ToDo"
// import ToDoContext from "../../context/ToDoContext";
// import { useContext } from "react";
// import ToDoDispatchContext from "../../context/ToDoDispatchContext";

function ToDoList({editTodo,deleteTodo,todoFinished}){


//    const {list} =useContext(ToDoContext)
const list = useSelector((state)=>state.todo.todoList)
console.log(list)

//    const{dispatch} = useContext(ToDoDispatchContext)
// const dispatch = useDispatch();

    function onFinished(todo,isFinished){
        // dispatch({type:'finish_todo',payload:{todo,isFinished:isFinished}})
        todoFinished({todo,isFinished})
    }

    function onDelete(todo){
        deleteTodo({todo})
        // dispatch({type:'delete_todo',payload:{todo}})
    }

    function onEdit(todo,todoText){
        editTodo({todo,todoText})
        // dispatch({type:'edit_todo',payload:{todo,todoText}})
    }


    return(
        <div>
        {
        list.length > 0 
        && 
        list.map(
            todo=>
            <ToDo 
            key={todo.id} 
            id={todo.id} 
            isFinished={todo.finished} 
            todoData={todo.todoData}
            changeFinished={(isFinished)=>onFinished(todo,isFinished)}
            onDelete={()=>onDelete(todo)}
            onEdit={(todoText)=>onEdit(todo,todoText)}
        />)
    }
        </div>
    )
}

export default ToDoList