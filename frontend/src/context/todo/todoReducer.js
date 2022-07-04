import { CREATE_TODO, DELETE_TODO, GET_TODOS, ISADD_TODO, UPDATE_TODO } from "../constants";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ISADD_TODO:
      return {
        ...state,
        isAdd: action.payload
      } 
    case CREATE_TODO:
      return {
        ...state,
        todos: action.payload
      } 
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      } 
    case UPDATE_TODO:
      return {
        ...state,
        todos: action.payload
      } 
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      } 
    default:
      return state
  }
}

export default todoReducer;
