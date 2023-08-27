import ToDo from "../ToDo/ToDo"
import ToDoContext from "../../context/ToDoContext";
import { useContext } from "react";
import ToDoDispatchContext from "../../context/ToDoDispatchContext";

function ToDoList(){
   const {list} =useContext(ToDoContext)
   const{dispatch} = useContext(ToDoDispatchContext)

    function onFinished(todo,isFinished){
        dispatch({type:'finish_todo',payload:{todo,isFinished:isFinished}})
    }

    function onDelete(todo){
        dispatch({type:'delete_todo',payload:{todo}})
    }

    function onEdit(todo,todoText){
        dispatch({type:'edit_todo',payload:{todo,todoText}})
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