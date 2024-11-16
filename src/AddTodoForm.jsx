const AddTodoForm = () => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.title.value = "";
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input id= "todoTitle" name="title"></input>
      <button>Add</button>
    </form>
  )
}

export default AddTodoForm
