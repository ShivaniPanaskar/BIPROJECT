var db = require("./model/postgres.sequelize.js") //path of db connection 
var userRouter = require("./router/user.js")
var express = require("express")
var app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Home Page")
})

db.sequelizeConfig.sync({ force: false })
    .then(
        () => {
            console.log("Databse Connection Done")
        }
    )
    .catch(
        (err) => {
            console.log("DB Connection Failed...")
            console.log(err)
        }
)
app.use("/user", userRouter)
app.listen(8080)


