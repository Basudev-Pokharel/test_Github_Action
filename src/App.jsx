import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import style from "./App.module.css";
import todos from "./ListTodo";
import TodoCard from "./TodoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todosList, setTodos] = useState(todos);
  const [input, SetInput] = useState("");
  function InputHandler(e) {
    SetInput(e.target.value);
  }
  function AddTodo() {
    let newList = [...todosList, input];
    setTodos(newList);
    SetInput("");
  }
  return (
    <div className={style.todobox}>
      <div className={style.input_box}>
        <input
          type="text"
          placeholder="ENTER YOUR WISH"
          onChange={InputHandler}
          value={input}
        />
        <button
          onClick={() => {
            AddTodo();
          }}
        >
          <FontAwesomeIcon icon={faCalendarPlus} className={style.add} />
        </button>
      </div>
      {todosList.map((data, idx) => {
        return (
          <TodoCard
            key={idx}
            data={data}
            id={idx}
            setTodos={setTodos}
            todosList={todosList}
          ></TodoCard>
        );
      })}
    </div>
  );
}

export default App;
