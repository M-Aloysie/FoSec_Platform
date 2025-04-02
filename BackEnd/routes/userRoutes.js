// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  logout, 
  getProfile 
} = require('../controller/userController');
const { 
  registerValidationRules, 
  loginValidationRules, 
  validate 
} = require('../middleware/validate');
const { protect } = require('../middleware/auth');

router.post('/register', 
  registerValidationRules(), 
  validate, 
  register
);

router.post('/login', 
  loginValidationRules(), 
  validate, 
  login
);

router.post('/logout', protect, logout);
router.get('/profile', protect, getProfile);

module.exports = router;