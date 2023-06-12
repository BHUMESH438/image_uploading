const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const createProduct = async (req, res) => {
  console.log(req.files);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllproduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = { createProduct, getAllproduct };
