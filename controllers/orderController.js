import Order from '../models/OrderModel.js';
import { StatusCodes } from 'http-status-codes';

//GET ALL ORDERS
export const getAllOrders = async (req, res) => {
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
  const { id } = req.params;
  const order = await Order.findById(id);

  if (!order) {
    return res.status(404).json({ msg: `no order with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ order });
};

//UPDATE ORDER
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedOrder) {
    return res.status(404).json({ msg: `no order with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ order: updatedOrder });
};

//DELETE ORDER
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const removedOrder = await Order.findByIdAndDelete(id);

  if (!removedOrder) {
    return res.status(404).json({ msg: `no order with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ order: removedOrder });
};
