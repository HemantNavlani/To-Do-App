import ToDo from "../ToDo/ToDo"

function ToDoList({list,updateList}){
   

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
            updateList(updatedList)
        }}
        />)
    }
        </div>
    )
}

export default ToDoList