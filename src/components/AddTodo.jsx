import React, { useState } from 'react'
import { useTodo } from '../contexts/useTodo';

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { todos, createNewTodo } = useTodo();

  return (
    <div className='h-[20%] w-full flex items-end justify-center pb-3 px-4 text-slate-100'>
      <input
        className='w-[70%] sm:w-[50%] md:w-[40%] lg:w-[33%] border px-3 py-1 outline-0 rounded-l-md'
        type="text"
        placeholder='write your task here'
        value={todo}
        onChange={(e) => { setTodo(e.target.value) }}
      />
      <button
        className='border border-blue-500 px-3 py-1 bg-indigo-500 text-slate-100 hover:bg-indigo-600 rounded-r-md cursor-pointer'
        type='button'
        onClick={() => {
          if (todo == "") { alert("Write your task first!!"); return; }
          createNewTodo(todo); setTodo("");
        }}
      >ADD
      </button>
    </div >
  )
}

export default AddTodo