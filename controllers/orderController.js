const db = require("../models");

// create main model
const Order = db.orders;

// create order
const addOrder = async (req, res) => {
  // validate request
  if (!req.body.orderId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // create a order
  let info = {
    orderId: req.body.orderId,
    customerId: req.body.customerId,
    orderAmount: req.body.orderAmount,
    status: req.body.status,
    shippingAddress: req.body.shippingAddress,
    category: req.body.category
  };

  // save order in the database
  try {
    const order = await Order.create(info);
    res.status(200).send(order);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error occurred while creating the order",
    });
  }
};

 // get all orders
const getAllOrders = async (req, res) => {
  let orders = await Order.findAll({});
  if (!orders) {
    res.status(500).json({ error: 'failed to all order fetch information' });
  } else {
    res.json({statusCode:200, message: 'all order fetch successfully', order: orders});
  }
};

// get single orders
const getSingleOrder = async (req, res) => {
  let id = req.params.id;
  let orders = await Order.findOne({ where: { id: id } });
  if (!order) {
    res.status(500).json({ error: 'failed to single order fetch information' });
  } else {
    res.json({statusCode:200, message: 'single order fetch successfully', order: orders });
  }
};

// update a order
const updateOrder = async (req, res) => {
  let id = req.params.id;
  const orders = await Order.update(req.body, { where: { id: id } });
  if (!orders) {
    res.status(500).json({ error: 'failed to update order information' });
  } else {
    res.json({statusCode:200, message: 'order information updated successfully', order: orders });
  }
};


module.exports = {
  addOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder
};
