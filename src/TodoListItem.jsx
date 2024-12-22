
const TodoListItem = (prop) => {
  const { taskId, task, onRemoveTodo } = prop;
  return (
    <li>{task}<button onClick={()=>{onRemoveTodo(taskId)}}>Remove</button></li>
  )

}
export default TodoListItem
