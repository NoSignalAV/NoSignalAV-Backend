const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Example API Route
app.get('/api/v1/users', (req, res) => {
  // Replace this with actual data fetching logic
  res.json([
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' }
  ]);
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
