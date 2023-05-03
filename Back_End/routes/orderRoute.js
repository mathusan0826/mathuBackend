const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const orderController = require('../controllers/orderControllers'); 
// 3.
// router.post('api/Order', orderController.newOrder); 
router.post('/', orderController.newOrder); 
router.get('/', orderController.getAllOrder);
// router.put('/updateOrder', orderController.newOrder);
router.put('/:id', orderController.updateAllOrder);
router.delete('/:id', orderController.deleteAllOrder);
 //4. 
module.exports = router;