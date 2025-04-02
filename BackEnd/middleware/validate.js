// middleware/validate.js
const { body, validationResult } = require('express-validator');

const registerValidationRules = () => {
  return [
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('role')
      .isIn(['Farmer', 'Buyer', 'PolicyMaker'])
      .withMessage('Role must be Farmer, Buyer, or PolicyMaker')
      .custom((value) => {
        if (value === 'Admin') {
          throw new Error('Admin role cannot be selected during registration');
        }
        return true;
      }),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
    body('location').optional().trim(),
  ];
};

const loginValidationRules = () => {
  return [
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  registerValidationRules,
  loginValidationRules,
  validate,
};