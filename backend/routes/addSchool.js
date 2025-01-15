import express from 'express';
import School from '../models/school.js'; // Sequelize model
import multer from 'multer';

const router = express.Router();

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

router.post('/addSchool', upload.single('image'), async (req, res) => {
  try {
    // Log request data for debugging
    console.log('Request Body:', req.body); // Logs text fields
    console.log('Uploaded File:', req.file); // Logs uploaded file details

    // Extract fields from request body
    const { name, address, city, state, contact, email_id } = req.body;

    // Validate fields
    if (!name || !address || !city || !state || !contact || !email_id || !req.file) {
      return res.status(400).json({ error: 'All fields, including an image, are required.' });
    }

    // Save school record to the database
    const newSchool = await School.create({
      name,
      address,
      city,
      state,
      contact,
      email_id,
      image: req.file.filename, // Save the uploaded file's filename
    });

    res.status(201).json({ message: 'School added successfully!', data: newSchool });
  } catch (error) {
    console.error('Error adding school:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

export default router;
