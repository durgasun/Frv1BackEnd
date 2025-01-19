const express = require('express');
const GroceryController = require('../../controller/Grocery/GroceryController');
const router = express.Router();
router.post('/AddItem',GroceryController.AddItemFun);
module.exports = router;