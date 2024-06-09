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

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllOrders).post(validateOrderInput, createOrder);
router
  .route('/:id')
  .get(validateIdParam, getOrder)
  .patch(validateOrderInput, validateIdParam, updateOrder)
  .delete(validateIdParam, deleteOrder);

export default router;
