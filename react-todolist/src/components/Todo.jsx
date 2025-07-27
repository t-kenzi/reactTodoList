import { useState } from 'react';
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [ todos, setTodos ] = useState(todoList)
  const [ editingTodo, setEditingTodo ] = useState(null);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos,todo]);
  }

  const updateTodo = (updateTodo) => {
    setTodos(todos.map(todo =>
      todo.id === updateTodo.id ? updateTodo : todo
    ));
    setEditingTodo(null);
  }

  const startEdit = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} startEdit={startEdit}/>
      <Form 
        createTodo={createTodo} 
        editingTodo={editingTodo} 
        updateTodo={updateTodo}
      />
    </>
  );
};

export default Todo;