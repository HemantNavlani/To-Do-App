import { useState } from "react"

function ToDo({todoData,isFinished,changeFinished}){

    const [finished,setFinished] = useState(isFinished)

    return (
        <div>
            <input type="checkbox" checked={finished}
            onChange={(e)=>{
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
            }
        }
            />
            <button>Edit</button>
            <button>Delete</button>
        {todoData}
        </div>
    )
}
export default ToDo