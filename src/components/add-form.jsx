import { useState } from "react"

function AddForm({onSubmit}){
    const [todo, setTodo] = useState("")

    const handleChange = (e) =>{
        setTodo(e.target.value)
        
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSubmit(todo)
            setTodo("")
            
        }
        
    }
    
    const handleSubmit = () =>{
        onSubmit(todo)
        setTodo("")
    }
    return(
        <div className="form">
            <div className="container">
                <input className="input" value={todo} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Add to do"/>
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    ) 
}

export default AddForm