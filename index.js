const exp = require("constants")
var userRouter = require("./router/user.js")
var express = require("express")()
express.get("/", (req, res) => {
    res.send("home Page")
})
express.use("/user", userRouter)
express.listen(8080)