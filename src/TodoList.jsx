import TodoListItem from "./TodoListItem.jsx";

const TodoList = (props) => {
  const { todoList, onRemoveTodo } = props;
  return (
    <>
      <ul>
        {
          todoList.map(function(eachTask) {
            return (
              <TodoListItem key={eachTask.id} taskId={eachTask.id} task={eachTask.title} onRemoveTodo={onRemoveTodo} />              
            )
          })
        }
      </ul>
    </>
  )
}

export default TodoList
