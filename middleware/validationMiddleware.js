import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/customErrors.js';
import {
  CITATION_STYLE,
  EDUCATION_LEVEL,
  LANGUAGE,
  ORDER_TYPE,
  PAPER_TYPE,
  SUBJECT,
} from '../utils/constants.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
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
