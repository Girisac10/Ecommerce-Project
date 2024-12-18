const express = require('express');
const { getProductsByCategory } = require('../controllers/categoryController');

const router = express.Router();


router.get('/categories/:category', getProductsByCategory);


module.exports = router;
