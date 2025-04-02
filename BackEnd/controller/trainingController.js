const { models } = require('../models');

const createTraining = async (req, res) => {
  try {
    const { title, content } = req.body;
    const trainerId = req.user.id; // From protect middleware

    const training = await models.Training.create({
      title,
      content,
      trainerId,
    });

    res.status(201).json({message: "trainings created successfully", training});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrainings = async (req, res) => {
  try {
    const trainings = await models.Training.findAll({
      include: [{ model: models.User, attributes: ['username'] }],
    });
    res.json({message:"trainings..", trainings});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyTrainings = async (req, res) => {
  try {
    const trainings = await models.Training.findAll({
      where: { trainerId: req.user.id },
    });
    res.json(trainings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await models.Training.findByPk(id);

    if (!training) return res.status(404).json({ message: 'Training not found' });
    if (training.trainerId !== req.user.id) {
      return res.status(403).json({ message: 'You can only edit your own trainings' });
    }

    await training.update(req.body);
    res.json(training);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await models.Training.findByPk(id);

    if (!training) return res.status(404).json({ message: 'Training not found' });
    if (training.trainerId !== req.user.id) {
      return res.status(403).json({ message: 'You can only delete your own trainings' });
    }

    await training.destroy();
    res.json({ message: 'Training deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTraining,
  getTrainings,
  getMyTrainings,
  updateTraining,
  deleteTraining,
};