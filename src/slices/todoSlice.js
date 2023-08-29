import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    todoList:[]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(todo,action) =>{
            let todoText = action.payload.todoText;
            todo.todoList.push( {id:todo.todoList.length==0?1:todo.todoList[todo.todoList.length-1].id+1,todoData:todoText,finished:false}  )

           
            
        },


        editTodo:(todo,action)=>{
            let payloadTodo = action.payload.todo;
        let todoText = action.payload.todoText;

        
        //ye jo hath ke hath ho pa raha h push vo ember js ki vajah se possible hai nhi toh hume ek new state banani padti thi and usse return karna padta tha
        //kuch is tarah
        // const updatedList = state.map(t=>{
        //     if (t.id==todo.id){
        //         todo.todoData=todoText;
        //     }
        //     return t;
        // })
        // return updatedList;
        

        todo.todoList = todo.todoList.map(t=>{
            if (t.id==payloadTodo.id){
                t.todoData=todoText;
            }
            return t;
        })
        
        },
        
        todoFinished:(todo,action)=>{
            let payloadTodo= action.payload.todo;
            let isFinished = action.payload.isFinished;
            todo.todoList = todo.todoList.map(t=>{
                if (t.id==payloadTodo.id){
                    todo.finished=isFinished;
                }
                return t;
            })
        },

        deleteTodo:(todo,action)=>{
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter(t=>t.id!=payloadTodo.id)
        }
    }
})

export const  {deleteTodo,addTodo,editTodo,todoFinished} = todoSlice.actions
export default todoSlice.reducer;