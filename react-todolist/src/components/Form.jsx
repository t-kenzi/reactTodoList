import { useState } from "react";
const Form = ({createTodo}) => {
  const [ enteredTodo, setEnteredTodo ] = useState("");
  const addTodo = (e) => {

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);
    setEnteredTodo("");
  }
  return (
    <div>
      <input type="text" onChange={(e) => 
        setEnteredTodo(e.target.value)
      }/>
      <button onClick={addTodo}>追加</button>
    </div>
  );
}

export default Form;