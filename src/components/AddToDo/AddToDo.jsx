// import { useContext, useState } from "react";
import {useState } from "react";

// import {useDispatch} from 'react-redux'
// import ToDoDispatchContext from "../../context/ToDoDispatchContext";

// import { addTodo } from "../../actions/todoActions";

function AddToDo({addTodo}){

    const [inputText,setInputText] = useState('')

    // const dispatch = useDispatch()
    // const {dispatch} = useContext(ToDoDispatchContext)
    return(
        <div>
            <input
            type="text"
            value={inputText}
            placeholder="add your next todo..."
            onChange={e=>setInputText(e.target.value)}
            />
            <button onClick={()=>{
                // dispatch({type:'add_todo',payload:{todoText:inputText}})
                // dispatch(addTodo(inputText))
                addTodo({todoText:inputText})
                setInputText('')
            }
            }>Add</button>
        </div>
    )
}
export default AddToDo;