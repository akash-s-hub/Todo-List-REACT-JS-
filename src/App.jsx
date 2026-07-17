import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TodoProvider from './contexts/TodoProvider';
import { useTodo } from './contexts/useTodo'

function App() {
  const { todos } = useTodo();
  return (

    <div className='h-screen w-screen flex flex-col items-center justify-center bg-slate-900'>
      <AddTodo />
      <TodoList />
    </div>

  )
}

export default App
