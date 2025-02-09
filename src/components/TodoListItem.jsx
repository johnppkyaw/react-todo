import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = (prop) => {
  const { taskId, task, onRemoveTodo } = prop;
  return (
    <li className={styles.ListItem}>{task}<button onClick={()=>{onRemoveTodo(taskId)}}>Remove</button></li>
  )
}

TodoListItem.propTypes = {
  taskId: PropTypes.number,
  task: PropTypes.string,
  onRemoveTodo: PropTypes.func
}

export default TodoListItem
