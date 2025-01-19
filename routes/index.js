const express = require('express');
const router = express.Router();
const userRoutes=require('./user/Auth');
const GroceryRoutes=require('./Grocery/Management');
router.use('/v1/user',userRoutes)
router.use('/v1/Grocery',GroceryRoutes)
module.exports = router;