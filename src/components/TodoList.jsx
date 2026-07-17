import React, { useEffect, useMemo, useState } from 'react'
import { useTodo } from '../contexts/useTodo'
import { FiEdit, FiSave } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const TodoList = () => {
  const { todos, updateExistingTodo, deleteTodo, toggleTaskDone } = useTodo();
  const [editingId, setEditingId] = useState(null);

  return (
    <div className='h-[80%] w-full px-4 sm:px-6 md:px-10 py-2 flex flex-col justify-start items-center text-slate-100'>
      {todos.map(
        (todo, idx) => {
          const isEditing = editingId === todo.id;
          return (
            <div key={todo.id} className={`h-[10%] w-full sm:w-[85%] md:w-[60%] lg:w-[40%] px-2 flex justify-between mb-2 ${todo.isCompleted ? "bg-slate-700" : "bg-slate-600 "}`}>

              <div className={`w-[9%] flex justify-center items-center`}>
                <input className='cursor-pointer' type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => toggleTaskDone(todo.id)} />
              </div>

              <div className={`w-[69%] flex justify-center items-center text-sm sm:text-base ${todo.isCompleted ? "line-through text-slate-500" : "text-slate-100 font-medium"}`}>
                {!isEditing ?
                  <div className='w-full h-full content-center truncate'>{todo.todoTask}</div> :
                  <input className='w-full h-full outline-0' type="text" placeholder='your todo'
                    value={todo.todoTask}
                    onChange={(e) => { updateExistingTodo(e.target.value, todo.id) }} />}
              </div>

              <button className={`w-[9%] flex justify-center items-center cursor-pointer`}
                disabled={todo.isCompleted}
                onClick={() => { setEditingId(isEditing ? null : todo.id) }}
              >
                {!isEditing ? <FiEdit /> : <FiSave />}
              </button>

              <button className='w-[9%] flex justify-center items-center cursor-pointer text-red-400 hover:text-red-500'
                onClick={() => { deleteTodo(todo.id) }}>
                <ImCross />
              </button>

            </div>)
        })
      }
    </div >

  )
}

export default TodoList