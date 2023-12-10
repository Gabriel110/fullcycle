const router = require("express").Router()
const userController = require("./controller/userController")

router
  .get('/:id', userController.fullCycle)
  .get('/', userController.index)
  .post('/create', userController.create)


module.exports = router