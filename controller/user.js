var db = require("../model/postgres.sequelize.js");
var User = db.users 
// var User = require("../model/user")
module.exports = {

    getUser: (req, res) => {
        res.send("this is function getctuser")

    },
    saveUser: (req, res) => {
        // console.log(req.body)
        // res.send(req.body)

        // console.log(req.body)
        const user = {
            id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            married: req.body.married


        };
        console.log(user)

        User.create(user)
            .then(
                (result) => {
                    res.send(result);
                }
            )
            .catch(
                (err) => {
                    res.send(err);
                }
            );
    },
    deleteUser: (req, res) => {
        res.send("this is function delectuser")

    },
    patchUser: (req, res) => {
        res.send("this is function patchuser")
    },
    putUser: (req, res) => {
        res.send("this is function putuser")
    },


};




