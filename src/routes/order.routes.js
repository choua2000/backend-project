const controller = require('../controllers/order.controller')
module.exports = (app)=>{
    app.post('/createorder', controller.creatorder)
}