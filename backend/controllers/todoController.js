const todoModel = require("../models/todoModel");

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await todoModel.createTodo(description)

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.readTodos()

    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
}

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await todoModel.readTodo(id)

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatedTodo = await todoModel.updateTodo(description, id)

    res.json(updatedTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await todoModel.deleteTodo(id)

    res.json(deletedTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo
}
