import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import {useState, useEffect} from 'react';
import './App.css'

function useSemiPersistentState() { 
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || []);
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList])  
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }
  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter(todo => todo.id != id);
    setTodoList([...filteredTodoList]);
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  )
}

export default App
