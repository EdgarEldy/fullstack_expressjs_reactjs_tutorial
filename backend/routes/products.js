const express = require('express');
const router = express.Router();

// Initialize database
const db = require('../models');

// Initialize Category model
const Category = db.Category;

// Initialize Product model
const Product = db.Product;

//Get products with categories
router.get('/products', async function (req, res, next) {
    const products = await Product.findAll({
        include: [{
            model: Category,
            required: true
        }]
    });
    return res.send(products);
});

// Add a product
router.post('/products', (req, res, next) => {

    // Get products data
    const product = {
        category_id: req.body.category_id,
        product_name: req.body.product_name,
        unit_price: req.body.unit_price
    }

    Product.create(product)
        .then((data) => {
            res.send(product.product_name + ' has been created successfully !');
        })
        .catch((error) => {
            res.send('Error');
        });
});

// Get products details by id
router.get('/products/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send('Product not found !');
        });
});

// Update a product by id
router.put("/products/edit/:id", function (req, res, next) {

    const id = req.params.id;

    Product.update(req.body, {
        where: {id: id}
    }).then((data) => {
        if (data === 1) {

            res.send(data);
        } else {
            res.send("Product has been updated successfully ")
        }
    }).catch((err) => {
        res.send("Error")
    });

});

// Remove a product
router.post("/products/delete/:id", (req, res, next) => {

    const id = req.params.id;
    Product.destroy({
        where: {id: id},
    })
        .then((data) => {
            res.send("Product has been removed successfully !");
        })
        .catch((error) => {
            res.send("Error");
        });
});

module.exports = router;