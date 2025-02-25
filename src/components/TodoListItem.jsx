import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = (prop) => {
  const { index, taskId, task, onRemoveTodo, onFinishTodo, completedAt } = prop;
  const unFinished = completedAt ? false : true;
  return (
    <li className={`${styles.ListItem} ${completedAt ? styles.Finish : ""}`}>{task}
      <button type="button" onClick={()=>{onRemoveTodo(taskId)}}>Remove</button>
      {unFinished && <button type="button" onClick={()=>{onFinishTodo(taskId, index)}}>Finish</button>}
    </li>
  )
}

TodoListItem.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  task: PropTypes.string,
  onRemoveTodo: PropTypes.func,
  onFinishTodo: PropTypes.func
}

export default TodoListItem
