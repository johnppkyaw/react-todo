import TodoListItem from "./TodoListItem.jsx";

const TodoList = (props) => {
  const { todoList } = props;
  return (
    <>
      <ul>
        {
          todoList.map(function(eachTask) {
            return (
              <TodoListItem key={eachTask.id} task={eachTask.title} />              
            )
          })
        }
      </ul>
    </>
  )
}

export default TodoList
