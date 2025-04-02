const { models } = require('../models');

const requestLoan = async (req, res) => {
  try {
    const { amount } = req.body;
    const userId = req.user.id; // From protect middleware

    const loan = await models.Loan.create({
      amount,
      userId,
      status: 'Pending',
    });

    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLoans = async (req, res) => {
  try {
    const loans = await models.Loan.findAll({
      include: [{ model: models.User, attributes: ['username'] }],
    });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyLoans = async (req, res) => {
  try {
    const loans = await models.Loan.findAll({
      where: { userId: req.user.id },
    });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLoanStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const loan = await models.Loan.findByPk(id);
    if (!loan) return res.status(404).json({ message: 'Loan not found' });

    await loan.update({ status });
    res.json(loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const loan = await models.Loan.findByPk(id);

    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    if (loan.userId !== req.user.id) {
      return res.status(403).json({ message: 'You can only delete your own loans' });
    }
    if (loan.status !== 'Pending') {
      return res.status(403).json({ message: 'Only pending loans can be deleted' });
    }

    await loan.destroy();
    res.json({ message: 'Loan deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  requestLoan,
  getLoans,
  getMyLoans,
  updateLoanStatus,
  deleteLoan,
};