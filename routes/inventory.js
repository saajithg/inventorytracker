const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Splash Page
router.get('/', (req, res) => res.render('home'));

// Display All Items
router.get('/inventory', async (req, res) => {
    const items = await Inventory.find();
    res.render('inventory', { items });
});

// Add New Item Form
router.get('/inventory/add', (req, res) => res.render('add'));

// Add New Item
router.post('/inventory/add', async (req, res) => {
    const { name, quantity, description } = req.body;
    await Inventory.create({ name, quantity, description });
    res.redirect('/inventory');
});

// Edit Item Form
router.get('/inventory/edit/:id', async (req, res) => {
    const item = await Inventory.findById(req.params.id);
    res.render('edit', { item });
});

// Update Item
router.post('/inventory/edit/:id', async (req, res) => {
    const { name, quantity, description } = req.body;
    await Inventory.findByIdAndUpdate(req.params.id, { name, quantity, description });
    res.redirect('/inventory');
});

// Delete Item Form
router.get('/inventory/delete/:id', async (req, res) => {
    const item = await Inventory.findById(req.params.id);
    res.render('delete', { item });
});

// Delete Item
router.post('/inventory/delete/:id', async (req, res) => {
    await Inventory.findByIdAndDelete(req.params.id);
    res.redirect('/inventory');
});

module.exports = router;
