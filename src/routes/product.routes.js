const controller = require('../controllers/product.controller')

module.exports = (app) =>{
    app.post('/createProfuct', controller.createProduct);
    app.get('/select', controller.select);
    app.get('/getOne/:id',controller.getOne);
    app.put('/updateProduct/:id', controller.updateProduct);
    app.delete('/deleteProduct/:id', controller.deleteProduct)
}