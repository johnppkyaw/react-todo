import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import {useState, useEffect} from 'react';
import './App.css'


  

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const thePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data : {
            todoList : JSON.parse(localStorage.getItem("savedTodoList")) || []
          }
        })
      }, 2000);
    });
    thePromise.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, [])
  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }  
  }, [todoList, isLoading])  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }
  const removeTodo = (id) => {
    const filteredTodoList = todoList.filter(todo => todo.id != id);
    setTodoList([...filteredTodoList]);
  }
  return (
    <>
      <p>{isLoading ? "Loading..." : "" }</p>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  )
}

export default App
