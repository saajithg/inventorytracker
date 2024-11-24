const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: String,
    dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);
