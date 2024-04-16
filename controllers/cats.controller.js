// Define an array of cat objects with id, name, and age properties
let cats = [
  { id: 1, name: 'Coco', age: 2 },
  { id: 2, name: 'Jojo', age: 5 },
  { id: 3, name: 'Oreo', age: 1 },
  { id: 4, name: 'Bobo', age: 3 }
];

// Function that generates a HTML message saying the cat says "meow"
const meow = (name) => {
  return `<h1>${name} says meow!</h1>`;
};

// Controller function to get all cats
exports.getAllCats = async (req, res) => {
  try {
    let message = ''; // Initialize an empty message
    // Loop through each cat and add its meow message to the overall message
    cats.forEach(cat => {
      message += meow(cat.name);
    });
    // Send the message as the response
    res.send(message);
  } catch (err) {
    // Handle any errors and send an error response
    res.status(500).json({ message: err.message });
  }
};

// Controller function to get a cat by its id
exports.getCatById = async (req, res) => {
  try {
    // Find the cat with the specified id in the cats array
    const cat = cats.find(cat => cat.id === parseInt(req.params.id));
    if (cat) {
      // If the cat is found, send its meow message as the response
      res.send(meow(cat.name));
    } else {
      // If the cat is not found, send a 404 error response
      res.status(404).json({ message: 'Cat not found' });
    }
  } catch (err) {
    // Handle any errors and send an error response
    res.status(500).json({ message: err.message });
  }
};

// Controller function to create a new cat
exports.createCat = async (req, res) => {
  const { name, age } = req.params; // Extract name and age from request parameters
  // Create a new cat object with a unique id and provided name and age
  const cat = {
    id: cats.length + 1,
    name,
    age
  };
  cats.push(cat); // Add the new cat to the cats array
  res.status(201).json(cat); // Send a 201 (Created) response with the new cat object
};

// Controller function to update an existing cat
exports.updateCat = async (req, res) => {
  // Find the cat with the specified id in the cats array
  const cat = cats.find(cat => cat.id === parseInt(req.params.id));
  if (cat) {
    const { name, age } = req.params; // Extract name and age from request parameters
    if (name) cat.name = name; // Update the cat's name if provided
    if (age) cat.age = age; // Update the cat's age if provided
    res.json(cat); // Send the updated cat object as the response
  } else {
    // If the cat is not found, send a 404 error response
    res.status(404).json({ message: 'Cat not found' });
  }
};

// Controller function to delete an existing cat
exports.deleteCat = async (req, res) => {
  try {
    // Find the index of the cat with the specified id in the cats array
    const index = cats.findIndex(cat => cat.id === parseInt(req.params.id));
    if (index === -1) {
      // If the cat is not found, send a 404 error response
      return res.status(404).json({ message: 'Cat not found' });
    }
    cats.splice(index, 1); // Remove the cat from the cats array
    res.json({ message: 'Cat deleted' }); // Send a success message as the response
  } catch (err) {
    // Handle any errors and send an error response
    res.status(500).json({ message: err.message });
  }
};
