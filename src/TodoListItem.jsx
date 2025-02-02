import styles from './TodoListItem.module.css';

const TodoListItem = (prop) => {
  const { taskId, task, onRemoveTodo } = prop;
  return (
    <li className={styles.ListItem}>{task}<button onClick={()=>{onRemoveTodo(taskId)}}>Remove</button></li>
  )

}
export default TodoListItem
