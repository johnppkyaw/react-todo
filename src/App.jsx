import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import {useState} from 'react';
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
    </>
  )
}

export default App
