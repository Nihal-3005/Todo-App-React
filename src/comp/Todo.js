import { useState } from "react"

const Todo = () => {
    const [input,setInput] = useState ('')
    const [todo,setTodo] = useState ([])

    const addItam = () => {
        if(input.trim() === ''){
            alert('Add Valid Data ...')
        }else{
            setTodo([...todo,input])
            setInput('')
        }
    }
    
    const deleteItam = (index) => {
        const newtodo = [...todo]
        newtodo.splice(index,1)
        setTodo(newtodo) 
    }

    const editItam = (index) => {
        const abc = todo[index]
        setInput(abc)
        deleteItam(index)
    }

    return(
         <div className="bg-secondary w-50 mx-auto p-5 rounded-4 mt-5">
             <h1 className="text-warning">TODO APP</h1>
             <input
                  type="text"
                  className="form-control w-75 mx-auto mb-3"
                  value={input}
                  onChange={(event)=>setInput(event.target.value)}
             />
             <button className="btn btn-success" onClick={addItam}>ADD</button>

             <table className="table mt-2">
                 <thead>
                       <tr>
                          <th>Sr.NO</th>
                          <th>Itam List</th>
                          <th>Action</th>
                       </tr>
                 </thead>
                 <tbody>
                        {
                          todo.map((itam,index) =>{
                              return(
                                    <tr key={index}>
                                         <td>{index +1 }</td>
                                         <td>{itam}</td>
                                         <td>
                                             <button className="btn btn-warning me-2" onClick={()=>editItam(index)}>EDIT</button>
                                             <button className="btn btn-danger" onClick={()=>deleteItam(index)}>DELETE</button>
                                         </td>
                                    </tr>
                              )
                           })
                        }
                 </tbody>
             </table>
         </div> 
    )
}

export default Todo