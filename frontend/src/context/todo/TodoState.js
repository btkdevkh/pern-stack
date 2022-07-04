import { useEffect, useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { API_URL } from '../../config';
import { GET_TODOS } from '../constants';

export default function TodoState({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    isAdd: false
  })

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => dispatch({ type: GET_TODOS, payload: data }))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <TodoContext.Provider 
      value={{ 
        ...state, 
        dispatch 
      }}
    >
      { children }
    </TodoContext.Provider>
  )
}
