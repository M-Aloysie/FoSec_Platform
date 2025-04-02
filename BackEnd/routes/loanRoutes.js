const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');
const {
  requestLoan,
  getLoans,
  getMyLoans,
  updateLoanStatus,
  deleteLoan,
} = require('../controller/loanController');

router.post('/', protect, restrictTo('Farmer'), requestLoan);
router.get('/', protect, restrictTo('PolicyMaker'), getLoans);
router.get('/my', protect, getMyLoans);
router.put('/:id', protect, restrictTo('PolicyMaker'), updateLoanStatus);
router.delete('/:id', protect, deleteLoan);

module.exports = router;