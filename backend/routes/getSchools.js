import express from 'express';
import School from '../models/school.js'; // Ensure the path to the model is correct

const router = express.Router();

// GET /api/getSchools
router.get('/getSchools', async (req, res) => {
  try {
    const schools = await School.findAll({ attributes: ['id', 'name', 'address', 'city', 'image'] });
    res.status(200).json(schools);
  } catch (err) {
    console.error('Error fetching schools:', err);
    res.status(500).json({ error: 'Error fetching schools' });
  }
});

export default router;

