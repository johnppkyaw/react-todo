import TodoListItem from "./TodoListItem.jsx";
import styles from './TodoListItem.module.css';

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

export default TodoList
