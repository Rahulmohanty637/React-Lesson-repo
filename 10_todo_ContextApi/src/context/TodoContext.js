import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      msg: "Todo message",
      completed: false,
    },
  ],
  addTodo: (msg) => {},
  upadateTodo: (id, msg) => {},
  deleteTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
