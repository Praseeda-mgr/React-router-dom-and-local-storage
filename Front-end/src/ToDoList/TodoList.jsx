import React from 'react'

function TodoList(props) {
  return (
    <div>
     <ul className="space-y-2">
                        <li className="flex justify-between items-center p-2 border rounded-lg">
                          <span>{props.todo.title}</span>
                          <div className="flex space-x-2">
                            <button className="bg-green-400 px-2 py-1 rounded-lg hover:bg-green-500">Complete</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" onClick={()=>{ 
                              props.deleteTodo(props.todo.id)
                            }}>Delete</button>
                            <button className="bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue">Update</button>
                          </div>
                        </li>
      </ul>
    </div>
  )
}

export default TodoList