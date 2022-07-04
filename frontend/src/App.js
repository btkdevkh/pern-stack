import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { ISADD_TODO } from "./context/constants";
import useTodoContext from "./hooks/useTodoContext";

function App() {
  const { isAdd, dispatch } = useTodoContext();

  const handleClick = () => dispatch({ type: ISADD_TODO, payload: true });

  return (
    <div className="container">
      <h1 className="my-3 text-center">CRUD TODOS | Node, PostgrSQL, React</h1>
      <hr />
      {!isAdd && (<button className="btn btn-primary mb-3" onClick={handleClick}>Add</button>)}
      {isAdd && (
        <AddTodo />
      )}
      <TodoList />
    </div>
  );
}

export default App;
