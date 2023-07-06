const db = require("../models");

// create main model
const Product = db.products;

// create product
const addProduct = async (req, res) => {
  // validate request
  if (!req.body.productName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // create a product
  let info = {
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
  };

  // save Product in the database
  try {
    const product = await Product.create(info);
    res.status(200).send(product);
    console.log(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the Product",
    });
  }
};

//get all product
const getAllProducts = async (req, res) => {
  try {
    // Pagination
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    // Sorting
    const { sortBy = 'createdAt', sortOrder = 'asc' } = req.query;
    const sortDirection = sortOrder === 'desc' ? 'DESC' : 'ASC';

    // Filtering
    const { category } = req.query;
    const whereClause = category ? { category } : {};

    const products = await Product.findAll({
      where: whereClause,
      order: [[sortBy, sortDirection]],
      limit: Number(limit),
      offset: Number(offset),
    });

    res.json({ statusCode: 200, message: 'Products fetched successfully', products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// get single products
const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let products = await Product.findOne({ where: { id: id } });
  if (!products) {
    res.status(500).json({ error: 'failed to single product fetch.' });
  } else {
    res.json({statusCode:200, message: 'single fetch successfully', products: products});
  }
};

// update a product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const products = await Product.update(req.body, { where: { id: id } });
  if (!products) {
    res.status(500).json({ error: 'failed to update product.' });
  } else {
    res.json({statusCode:200, message: 'single fetch successfully', products: products});
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  const products = await Product.destroy({ where: { id: id } });
  if (!products) {
    res.status(500).json({ error: 'failed to delete product.' });
  } else {
    res.json({statusCode:200, message: 'product delete successfully', products: products});
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
