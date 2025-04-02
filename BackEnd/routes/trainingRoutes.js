const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');
const {
  createTraining,
  getTrainings,
  getMyTrainings,
  updateTraining,
  deleteTraining,
} = require('../controller/trainingController');

router.post('/', protect, restrictTo('PolicyMaker'), createTraining);
router.get('/', getTrainings);
router.get('/my', protect, getMyTrainings);
router.put('/:id', protect, updateTraining);
router.delete('/:id', protect, deleteTraining);

module.exports = router;