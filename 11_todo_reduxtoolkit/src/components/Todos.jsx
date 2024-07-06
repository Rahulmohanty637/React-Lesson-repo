import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => {removeTodo(item.id)}}>X</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
