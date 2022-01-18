var userRouter = require("express").Router()
var userController = require("../controller/user.js")
userRouter.get("/", userController.getUser)
userRouter.post("/", userController.saveUser)
userRouter.patch("/", userController.patchUser)
userRouter.delete("/", userController.deleteUser)
userRouter.put("/", userController.putUser)
module.exports = userRouter