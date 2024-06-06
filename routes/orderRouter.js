import { Router } from 'express';
const router = Router();

import {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllOrders).post(createOrder);
router.route('/:id').get(getOrder).patch(updateOrder).delete(deleteOrder);

export default router;
