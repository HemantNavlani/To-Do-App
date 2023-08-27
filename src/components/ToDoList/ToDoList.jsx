import ToDo from "../ToDo/ToDo"
import ToDoContext from "../../context/ToDoContext";
import { useContext } from "react";

function ToDoList(){
   const {list,setList} =useContext(ToDoContext)

    return(
        <div>
        {list.length > 0 && 
        list.map(todo=>
        <ToDo 
        key={todo.id} 
        isFinished={todo.finished} 
        id={todo.id} 
        todoData={todo.todoData}
        changeFinished={(isFinished)=>{
            const updatedList = list.map(t=>{
                if (t.id==todo.id){
                    todo.finished=isFinished;
                }
                return t;
            })
            setList(updatedList)
        }}
        onDelete={()=>{
            const updatedList = list.filter(t=>t.id!=todo.id)
            setList(updatedList)
        }}
        onEdit={(todoText)=>{
            const updatedList = list.map(t=>{
                if (t.id==todo.id){
                    todo.todoData=todoText;
                }
                return t;
            })
            setList(updatedList)
        }}
        />)
    }
        </div>
    )
}

export default ToDoList