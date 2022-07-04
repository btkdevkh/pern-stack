import { useState } from "react";
import { API_URL } from "../config";
import { DELETE_TODO, UPDATE_TODO } from "../context/constants";
import useTodoContext from "../hooks/useTodoContext";

export default function Todo({ todo }) {
  const { todos, dispatch } = useTodoContext();
 
  const [description, setDescription] = useState(todo.description);
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateTodo = () => {
    setIsEdit(true);
  }

  const handleDeleteTodo = async () => {
    if(window.confirm("Delete this todo ?")) {
      await fetch(`${API_URL}/${todo.id}`, {
        method: 'DELETE'
      });
  
      dispatch({ type: DELETE_TODO, payload: todo.id })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEdit(false);

    const res = await fetch(`${API_URL}/${todo.id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description })
    });

    const updatedTodo = await res.json();

    const newTodos = todos.filter(x => x.id !== updatedTodo.id);

    dispatch({ type: UPDATE_TODO, payload: [...newTodos, updatedTodo] });
  }

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.description}</td>
      {isEdit && (
        <td>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col input-group-sm">
                <input 
                  className="form-control"
                  type='text'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
              </div>
            </div>
          </form>
        </td>
      )}

      {!isEdit && (
        <td>
          <button
            className="btn btn-warning"
            onClick={handleUpdateTodo}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
          </button>
        </td>
      )}
      <td>
        <button
          className="btn btn-danger"
          onClick={handleDeleteTodo}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>
        </button>
      </td>
    </tr>
  )
}
