import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import {
  CITATION_STYLE,
  EDUCATION_LEVEL,
  LANGUAGE,
  ORDER_TYPE,
  PAPER_TYPE,
  SUBJECT,
} from '../utils/constants.js';
import mongoose from 'mongoose';
import Order from '../models/OrderModel.js';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no order')) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateOrderInput = withValidationErrors([
  body('topic').notEmpty().withMessage('Topic is required'),
  body('pages').notEmpty().withMessage('Pages is required'),
  body('sources').notEmpty().withMessage('Sources is required'),
  body('orderType')
    .isIn(Object.values(ORDER_TYPE))
    .withMessage('Invalid Order Type'),
  body('paperType')
    .isIn(Object.values(PAPER_TYPE))
    .withMessage('Invalid Paper Type'),
  body('educationLevel')
    .isIn(Object.values(EDUCATION_LEVEL))
    .withMessage('Invalid Education Level'),
  body('subject').isIn(Object.values(SUBJECT)).withMessage('Invalid Subject'),
  body('citationStyle')
    .isIn(Object.values(CITATION_STYLE))
    .withMessage('Invalid Citation Style'),
  body('language')
    .isIn(Object.values(LANGUAGE))
    .withMessage('Invalid Language'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('Invalid MongoDB Id');

    const order = await Order.findById(value);
    if (!order) throw new NotFoundError(`no order with id ${value}`);
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('lastName').notEmpty().withMessage('last name is required'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);
