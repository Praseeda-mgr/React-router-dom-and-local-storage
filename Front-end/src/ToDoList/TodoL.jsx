import React from 'react'

function TodoL() {
  return (
    <div>
      <ul className="list-disc pl-5">
          <li className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Sample Task 1</span>
            <button className="text-red-500 hover:text-red-600">Delete</button>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Sample Task 2</span>
            <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600" onClick={()=>{props.deleteTodo(props.todo.id)}}/>
          </li>
        </ul>
    </div>
  )
}

export default TodoL
