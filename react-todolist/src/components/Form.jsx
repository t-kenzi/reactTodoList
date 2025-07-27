import { useState, useEffect } from "react";

const Form = ({createTodo, editingTodo, updateTodo}) => {
  const [ enteredTodo, setEnteredTodo ] = useState("");

  useEffect(() => {
    if (editingTodo){
      setEnteredTodo(editingTodo.content);
    } else {
      setEnteredTodo("");
    }
  }, [editingTodo]);

  const handleSubmit = () => {
    if(!enteredTodo.trim()) return;

    if(editingTodo){
      updateTodo({ ...editingTodo, content: enteredTodo });
    }else{
      const newTodo ={
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
      };
      createTodo(newTodo);
    }
    setEnteredTodo("");
  }

  return (
    <div>
      <input 
      type="text" 
      value={enteredTodo}
      onChange={(e) => setEnteredTodo(e.target.value)
      }/>
      <button onClick={handleSubmit}>
        {editingTodo ? "更新":"追加"}
      </button>
    </div>
  );
}

export default Form;