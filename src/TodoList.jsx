const TodoList = () => {
  const todoList = [
    {
      id: 1,
      title: "Create the assignment"
    },
    {
      id: 2,
      title: "Follow the instructions"
    },
    {
      id: 3,
      title: "Complete the assignment"
    }
  ]
  return (
    <>
      <ul>
        {
          todoList.map(function(eachTask) {
            return (
              <li key={eachTask.id}>{eachTask.title}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default TodoList
