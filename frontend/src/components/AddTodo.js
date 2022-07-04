import { useState } from "react";
import { API_URL } from "../config";
import { CREATE_TODO, ISADD_TODO } from "../context/constants";
import useTodoContext from "../hooks/useTodoContext";

export default function AddTodo () {
  const { todos, dispatch } = useTodoContext();

  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: ISADD_TODO, payload: false })

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description })
    });

    const addedTodo = await res.json();

    dispatch({ type: CREATE_TODO, payload: [...todos, addedTodo] })
  }
  
  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-auto input-group-sm">
            <input 
              className="form-control"
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
