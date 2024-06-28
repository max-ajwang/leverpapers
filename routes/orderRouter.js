import { Router } from 'express';
const router = Router();

import {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';
import {
  validateOrderInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router
  .route('/')
  .get(getAllOrders)
  .post(checkForTestUser, validateOrderInput, createOrder);
router
  .route('/:id')
  .get(validateIdParam, getOrder)
  .patch(checkForTestUser, validateOrderInput, validateIdParam, updateOrder)
  .delete(checkForTestUser, validateIdParam, deleteOrder);

export default router;
