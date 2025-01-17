import Order from '../models/OrderModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

//GET ALL ORDERS
export const getAllOrders = async (req, res) => {
  const {
    search,
    paperType,
    educationLevel,
    subject,
    orderStatus,
    topic,
    sort,
  } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { paperType: { $regex: search, $options: 'i' } },
      { subject: { $regex: search, $options: 'i' } },
      { topic: { $regex: search, $options: 'i' } },
    ];
  }

  if (paperType && paperType !== 'all') {
    queryObject.paperType = paperType;
  }

  if (educationLevel && educationLevel !== 'all') {
    queryObject.educationLevel = educationLevel;
  }

  if (subject && subject !== 'all') {
    queryObject.subject = subject;
  }

  if (orderStatus && orderStatus !== 'all') {
    queryObject.orderStatus = orderStatus;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': '-subject',
    'z-a': 'subject',
  };

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const sortKey = sortOptions[sort] || sortOptions.newest;
  const orders = await Order.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalOrders = await Order.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalOrders / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalOrders, numOfPages, currentPage: page, orders });
};

//CREATE ORDER
export const createOrder = async (req, res) => {
  req.body.createdBy = req.user.userId;
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

//SHOW STATS
export const showStats = async (req, res) => {
  let stats = await Order.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$orderStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    bidding: stats.bidding || 0,
    progress: stats.progress || 0,
    done: stats.done || 0,
  };

  let monthlyOrders = await Order.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyOrders = monthlyOrders
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyOrders });
};
