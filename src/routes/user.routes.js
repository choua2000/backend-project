const controller = require('../controllers/user.controller');
module.exports = (app) => {
  app.post('/create_User', controller.createUser);
  app.post('/Login_user', controller.Login);
  app.get('/selectAll', controller.selectAll);
  app.put('/updateUser/:id', controller.updateUser);
  app.get('/getOne/:id', controller.getOne);
  app.delete('/deleteUser/:id', controller.deleteUser)
}