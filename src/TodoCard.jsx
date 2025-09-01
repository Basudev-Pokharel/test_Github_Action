import React from "react";
import style from "./TodoCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faAnglesDown,
  faAnglesUp,
  fas,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

function TodoCard({ data, id, setTodos, todosList }) {
  function Delete(id) {
    let data = todosList.filter((data, idx) => {
      return idx != id;
    });
    console.log(id);
    setTodos(data);
  }
  function goDown(id) {
    let arr = [...todosList];
    if (id !== arr.length - 1) {
      // console.log(arr, id);
      [arr[id + 1], arr[id]] = [arr[id], arr[id + 1]];
      setTodos(arr);
    }
  }
  function goUp(id) {
    console.log("done shiftung Up");
    if (id !== 0) {
      let arr = [...todosList];
      //   console.log(arr, id);
      [arr[id - 1], arr[id]] = [arr[id], arr[id - 1]];
      setTodos(arr);
    }
  }
  return (
    <div className={style.todoBox}>
      <h2>{data}</h2>
      <div>
        <button
          onClick={() => {
            Delete(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          onClick={() => {
            goDown(id);
          }}
        >
          <FontAwesomeIcon icon={faAnglesDown} />
        </button>
        <button
          onClick={() => {
            goUp(id);
          }}
        >
          <FontAwesomeIcon icon={faAnglesUp} />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
