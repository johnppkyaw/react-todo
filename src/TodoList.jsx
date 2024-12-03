import TodoListItem from "./TodoListItem.jsx";

const TodoList = (props) => {
  return (
    <>
      <ul>
        {
          props.todoList.map(function(eachTask) {
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
