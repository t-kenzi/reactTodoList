const List = ({todos, deleteTodo, startEdit}) => {
  const complete = (id) => {
      deleteTodo(id);
  }
  return(
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
              <span>{todo.content}</span>
              <button onClick={() => startEdit(todo)}>編集</button>
              <button onClick={() => complete(todo.id)}>完了</button>
          </div>
        )
      })}
    </div>
  )
}

export default List;