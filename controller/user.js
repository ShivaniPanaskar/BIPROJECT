module.exports = {
    getUser: (req, res) => {
        res.send("this is function getuser")
    },
    saveUser: (req, res) => {
        res.send("this is function postuser")
    },
    deleteUser: (req, res) => {
        res.send("this is function delectuser")
    },
    patchUser: (req, res) => {
        res.send("this is function patchuser")
    },
    putUser: (req, res) => {
        res.send("this is function putuser")
    }


}