// Import the express module
const express = require('express');
// Create a router instance
const router = express.Router();
// Import the todosController module
const todosController = require('../controllers/todos.controller');

// Define routes for different CRUD operations on todos

// Route to get all todos
router.get('/', todosController.getAllTodos);

// Route to get a todo by its id
router.get('/:id', todosController.getTodoById);

// Route to create a new todo
router.post('/', todosController.createTodo);

// Route to update a todo by its id
router.put('/:id', todosController.updateTodo);

// Route to delete a todo by its id
router.delete('/:id', todosController.deleteTodo);

// Export the router to make it available to other modules
module.exports = router;
