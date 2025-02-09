import TodoListItem from "./TodoListItem.jsx";
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todoList, onRemoveTodo } = props;
  return (
    <>
      <ul className={styles.ListItemHolder}>
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

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList
