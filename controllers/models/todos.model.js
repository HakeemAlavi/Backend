// Define a class named Todo
class Todo {
    // Constructor method to initialize properties of a todo item
    constructor(id, title, priority, createdAt, done, doneAt) {
        // Initialize properties with provided values
        this.id = id; // Unique identifier for the todo item
        this.title = title; // Title of the todo item
        this.priority = priority; // Priority level of the todo item
        this.createdAt = createdAt; // Date and time when the todo item was created
        this.done = done; // Boolean flag indicating whether the todo item is done or not
        this.doneAt = doneAt; // Date and time when the todo item was marked as done
    }
}

// Export the Todo class to make it available for use in other modules
module.exports = Todo;
