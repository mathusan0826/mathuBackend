const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const productItemsController = require('../controllers/productItemsControllers'); 
// 3.
router.post('/', productItemsController.newproductItems); 
router.get('/', productItemsController.getAllproductItem);
router.put('/:id', productItemsController.updateAllproductItem); 
router.delete('/:id', productItemsController.newproductItems); 
// 4. 
module.exports = router;