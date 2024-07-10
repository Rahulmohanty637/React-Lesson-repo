import "./App.css";
import { useRecoilValue } from "recoil";
import Todos from "./components/Todos";
import { totalTodos } from "./state/selectors/TotalTodos";

function App() {
  const totalTodoState = useRecoilValue(totalTodos);
  return (
    <>
      <div>Hey</div>
      <Todos />
      <div>
        <h3>Total Todos : {totalTodoState}</h3>
      </div>
    </>
  );
}

export default App;
