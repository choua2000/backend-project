const express = require('express')
const router = express.Router();

const productRoute = require('./product.routes')
const userRoute = require('./user.routes')
const orderRoute = require('./order.routes')


productRoute(router)
userRoute(router)
orderRoute(router)


module.exports = router;