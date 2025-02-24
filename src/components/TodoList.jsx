import TodoListItem from "./TodoListItem.jsx";
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todoList, onRemoveTodo, onFinishTodo } = props;

  return (
    <>
      <ul className={styles.ListItemHolder}>
        {
          todoList.map(function(eachTask, index) {
            return (
              <TodoListItem index={index} key={eachTask.id} taskId={eachTask.id} task={eachTask.title} onRemoveTodo={onRemoveTodo} onFinishTodo={onFinishTodo} completedAt={eachTask.completedAt}/>              
            )
          })
        }
      </ul>
    </>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onFinishTodo: PropTypes.func
}

export default TodoList
