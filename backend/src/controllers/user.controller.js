const user = {};
const userModel = require('../models/users');

user.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
};

user.createUser = async (req, res) => {
    // verify = userModel.findOne({username: req.body.username});
    // res.json({verify});
    // console.log(verify);
    const { username, first_name, last_name, password } = req.body;
    const user = new userModel({
        username,
        first_name,
        last_name,
        password
    });
    await user.save();
    res.json('user ' + req.body.first_name + " " + req.body.last_name + ' created');

};

user.deleteUser = async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.json('User Deleted');
};

module.exports = user;