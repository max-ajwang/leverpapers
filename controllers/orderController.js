import Order from '../models/OrderModel.js';

import { nanoid } from 'nanoid';

let orders = [
  {
    id: nanoid(),
    order_type: 'writing',
    pages: 3,
    subject: 'coding',
    topic: 'MERN stack',
    sources: 3,
  },
  {
    id: nanoid(),
    order_type: 'editing',
    pages: 3,
    subject: 'social work',
    topic: 'nursing',
    sources: 3,
  },
];

export const getAllOrders = async (req, res) => {
  res.status(200).json({ orders });
};

export const createOrder = async (req, res) => {
  const {
    orderType,
    paperType,
    educationLevel,
    subject,
    topic,
    pages,
    sources,
    citationStyle,
    language,
    deadline,
  } = req.body;

  const order = await Order.create({
    orderType,
    paperType,
    subject,
    topic,
    deadline,
  });

  res.status(201).json({ order });
};

export const getOrder = async (req, res) => {
  const { id } = req.params;
  const order = orders.find((order) => order.id === id);
  if (!order) {
    //throw new Error('no order with that id');
    return res.status(404).json({ msg: `no order with id ${id}` });
  }
  res.status(200).json({ order });
};

export const updateOrder = async (req, res) => {
  const { order_type, pages, subject, topic, sources } = req.body;
  if (!order_type || !pages || !subject || !topic || !sources) {
    return res.status(400).json({
      msg: 'please provide order type, pages, subject, topic and sources',
    });
  }
  const { id } = req.params;
  const order = orders.find((order) => order.id === id);
  if (!order) {
    return res.status(404).json({ msg: `no order with id ${id}` });
  }

  order.order_type = order_type;
  order.pages = pages;
  order.subject = subject;
  order.topic = topic;
  order.sources = sources;

  res.status(200).json({ msg: 'order modified', order });
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const order = orders.find((order) => order.id === id);
  if (!order) {
    return res.status(404).json({ msg: `no order with id ${id}` });
  }
  const newOrders = orders.filter((order) => order.id !== id);
  orders = newOrders;

  res.status(200).json({ msg: 'order deleted' });
};
