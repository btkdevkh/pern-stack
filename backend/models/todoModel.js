const pool = require('../db');

const createTodo = async (description) => {
  return await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
}

const readTodos = async () => {
  return await pool.query("SELECT * FROM todo");
}

const readTodo = async (id) => {
  return await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
}

const updateTodo = async (description, id) => {
  return await pool.query("UPDATE todo SET description = $1 WHERE id = $2 RETURNING *", [description, id]);
}

const deleteTodo = async (id) => {
  return await pool.query("DELETE FROM todo WHERE id = $1 RETURNING *", [id]);
}

const todoModel = {
  createTodo,
  updateTodo,
  readTodos,
  readTodo, 
  updateTodo,
  deleteTodo
}

module.exports = todoModel;
