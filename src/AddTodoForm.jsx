import {useState} from 'react';
import InputWithLabel from './InputWithLabel.jsx'
import styles from './TodoListItem.module.css';

const AddTodoForm = (props) => {
  const { onAddTodo } = props;
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleAddTodo} className={styles.TodoField}>
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
        Title
      </InputWithLabel>
      <button>Add</button>
    </form>
  )
}

export default AddTodoForm
