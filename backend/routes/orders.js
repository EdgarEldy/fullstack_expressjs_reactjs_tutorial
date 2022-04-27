const express = require('express');
const router = express.Router();

// Initialize database connection
const db = require('../models');

// Initialize Order model
const Order = db.Order;

// Initialize Customer model
const Customer = Order.Customer;

// Initialize Product model
const Product = db.Product;

module.exports = router;