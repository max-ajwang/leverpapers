import Order from '../models/OrderModel.js';
import { StatusCodes } from 'http-status-codes';

//GET ALL ORDERS
export const getAllOrders = async (req, res) => {
  console.log(req.user);
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders });
};

//CREATE ORDER
export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(StatusCodes.CREATED).json({ order });
};

//GET ORDER
export const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.status(StatusCodes.OK).json({ order });
};

//UPDATE ORDER
export const updateOrder = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ order: updatedOrder });
};

//DELETE ORDER
export const deleteOrder = async (req, res) => {
  const removedOrder = await Order.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ order: removedOrder });
};
