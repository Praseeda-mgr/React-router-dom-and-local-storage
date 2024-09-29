import React, { useState } from 'react';

function TodoCreate({ createTodo }) {
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(data);
    setData('');
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Add a new task"
        className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Add
      </button>
    </div>
  );
}

export default TodoCreate;
