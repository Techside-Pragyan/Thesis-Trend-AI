const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('AI Research Topic Generator API is running!');
});

// Routes will be mounted here later
// app.use('/api/generate', require('./routes/generate'));

const PORT = process.env.PORT || 5000;

// Database connection
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log('No MONGO_URI provided, skipping MongoDB connection.');
      return;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
