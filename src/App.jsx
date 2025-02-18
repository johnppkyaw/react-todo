import TodoList from './components/TodoList.jsx'
import AddTodoForm from './components/AddTodoForm.jsx'
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import styles from './components/TodoListItem.module.css';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {

    const viewValue = 'Grid%20view';
    const sortFieldValue = 'title';
    const sortDirectionValue = 'asc';
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=${viewValue}&sort[0][field]=${sortFieldValue}&sort[0][direction]=${sortDirectionValue}`;

    const options = {
      method : "GET",
      "headers" : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorMsg = `Error: ${response.status}`;
        throw new Error(errorMsg);
      }
      const data = await response.json();

      data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.title;
        const titleB = objectB.fields.title;

        return titleA < titleB ? 1 
        : titleA > titleB ? -1 
        : 0;
      })

      const todo = data.records.map(todo => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        return newTodo;
      })

      setTodoList(todo);
      setIsLoading(false);

    } catch(error) {
      console.log(error.message);
    }

  };

  useEffect(() => {
    fetchData()
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <p>{isLoading ? "Loading..." : "" }</p>
            <h1 className={styles.TodoTitle}>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
          </>
        }
        />
        <Route path="/new" element={
          <h1>New Todo List</h1>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
