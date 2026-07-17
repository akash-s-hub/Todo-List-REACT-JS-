import React, { useEffect, useState } from 'react'
import { TodoContext } from './TodoContext'

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todoTask: "Shruti ko msg krna hai (Samit's task)",
      isCompleted: false
    }, {
      id: 2,
      todoTask: "Neel - kya hi task du tujhe... tera sara task done",
      isCompleted: true
    }
  ]);

  const createNewTodo = (todo) => {
    setTodos((prev) => ([...prev, {
      id: Date.now(),
      todoTask: todo,
      isCompleted: false
    }]));
  }

  const updateExistingTodo = (editedTodo, id) => {
    setTodos((prev) => (
      prev.map((todo) =>
        todo.id === id ?
          { ...todo, todoTask: editedTodo } :
          todo
      )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (
      prev.filter((todo) =>
        todo.id === id ?
          "" :
          todo
      )))
  }

  const toggleTaskDone = (id) => {
    setTodos((prev) => (
      prev.map((todo) =>
        todo.id === id ?
          { ...todo, isCompleted: !todo.isCompleted } :
          todo
      )))
  }

  const value = { todos, createNewTodo, updateExistingTodo, deleteTodo, toggleTaskDone };

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    setTodos(stored ? JSON.parse(stored) : []);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
