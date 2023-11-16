// const express = require('express');
// const router = express.Router();
// const controller = require('./calculator');

// router.get('/', controller.homeController.calculator);
// router.post('/', homeController);

// module.exports = router;
const express = require('express');
const router =express.Router();
const calculator = require('./controllers')

router.get('/calculator',calculator.resultController.calculator)

module.exports=router;