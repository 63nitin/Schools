import express from 'express'; // Import Express
import bodyParser from 'body-parser';
import cors from 'cors';
import addSchoolRoutes from './routes/addSchool.js'; // Adjust the path to your route file
import sequelize from './config/db.js'; // Import Sequelize instance
import getSchoolRoutes from './routes/getSchools.js'

const app = express(); // Initialize Express

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', getSchoolRoutes);
app.use('/api', addSchoolRoutes); // Prefix all routes from addSchool.js with /api

// Test Database Connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
