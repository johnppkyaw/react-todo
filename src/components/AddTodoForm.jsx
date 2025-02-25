import {useState} from 'react';
import InputWithLabel from './InputWithLabel.jsx'
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const AddTodoForm = (props) => {
  const { onAddTodo } = props;
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  const addData = async () => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    const payLoad = {
      fields: {
        title: todoTitle
      },
      typecast: true
    }

    const options = {
      method: "POST",
      body: JSON.stringify(payLoad),
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

    } catch(error) {
      console.log(error.message);
    }

  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    addData();
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

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
}

export default AddTodoForm
