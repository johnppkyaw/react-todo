import {useState} from 'react';

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(todoTitle);
    event.target.title.value = "";
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input id= "todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
      <button>Add</button>
    </form>
  )
}

export default AddTodoForm
