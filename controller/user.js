var db = require("../model/postgres.sequelize.js");
var User = db.users
module.exports = {

    getUser: (req, res) => {
        res.send("this is function getctuser")
        //get all the user from the db
        //User var  // select * from table users;
        // User.findAll()
        //     .then(
        //         (result) => {
        //             res.status(200).send(result)
        //         }
        //     )
        //     .catch(
        //         (err) => {
        //             res.send(err)
        //         }

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

            // id: 12,
            // name: Shivani,
            // age: 26,
            // married: false

        };
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




