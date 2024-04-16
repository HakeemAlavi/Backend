// Import the Todo model
const Todo = require('../models/todos.model');

// Initialize an array to store todos
let todos = [
    new Todo(1, 'Buy groceries', 'High', new Date(), false, null),
    new Todo(2, 'Walk the dog', 'Low', new Date(), false, null),
    new Todo(3, 'Do laundry', 'Medium', new Date(), false, null),
    new Todo(4, 'Wash dishes', 'High', new Date(), false, null),
    new Todo(5, 'Water plants', 'Low', new Date(), false, null)
];

// Controller function to get all todos
exports.getAllTodos = async (req, res) => {
    try {
        res.json(todos); // Send all todos as JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle errors and send error response
    }
};

// Controller function to get a todo by its id
exports.getTodoById = async (req, res) => {
    try {
        // Find the todo with the specified id in the todos array
        const todo = todos.find(todo => todo.id === parseInt(req.params.id));
        if (todo) {
            res.json(todo); // If todo is found, send it as JSON response
        } else {
            res.status(404).json({ message: 'Todo not found' }); // If todo is not found, send 404 error response
        }
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle errors and send error response
    }
}

// Controller function to create a new todo
exports.createTodo = async (req, res) => {
    const { title, priority } = req.body; // Extract title and priority from request body
    // Create a new todo object with a unique id and provided title, priority, and other default values
    const todo = new Todo(
        todos.length + 1,
        title,
        priority,
        new Date(),
        false,
        null
    );
    todos.push(todo); // Add the new todo to the todos array
    res.status(201).json(todo); // Send a 201 (Created) response with the new todo object
};

// Controller function to update an existing todo
exports.updateTodo = async (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id)); // Find the todo to update
    if (todo) {
        const { title, priority, done } = req.body; // Extract updated values from request body
        if (title) todo.title = title; // Update title if provided
        if (priority) todo.priority = priority; // Update priority if provided
        if (done !== undefined) { // Check if 'done' property is provided in request body
            todo.done = done; // Update 'done' property
            todo.doneAt = done ? new Date() : null; // Update 'doneAt' property based on 'done' status
        }
        res.json(todo); // Send the updated todo as JSON response
    } else {
        res.status(404).json({ message: 'Todo not found' }); // If todo is not found, send 404 error response
    }
}

// Controller function to delete an existing todo
exports.deleteTodo = async (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id)); // Find the todo to delete
    if (todo) {
        todos = todos.filter(todo => todo.id !== parseInt(req.params.id)); // Remove the todo from the todos array
        res.json({ message: 'Todo deleted' }); // Send a success message as the response
    } else {
        res.status(404).json({ message: 'Todo not found' }); // If todo is not found, send 404 error response
    }
}
