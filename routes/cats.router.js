// Import the express module
const express = require('express');
// Create a router instance
const router = express.Router();
// Import the catsController module
const catsController = require('../controllers/cats.controller');

// Define routes for different CRUD operations on cats

// Route to get all cats
router.get('/', catsController.getAllCats);

// Route to get a cat by its id
router.get('/:id', catsController.getCatById);

// Route to create a new cat with a name and age
router.post('/:name-:age', catsController.createCat);

// Route to update a cat by its id
router.put('/:id/:name-:age', catsController.updateCat);

// Route to delete a cat by its id
router.delete('/:id', catsController.deleteCat);

// Export the router to make it available to other modules
module.exports = router;
