/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  }

  function handleInputChange(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }

  console.log({ todos });

  function clearTodos() {
    setTodos([]);
  }

  return (
    <main>
      <input
        value={inputText}
        onChange={handleInputChange}
        type="text"
        id="todoInput"
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todo</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
};

export default Todos;
