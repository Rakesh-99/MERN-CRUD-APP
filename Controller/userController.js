const Model = require('../Model/userModel');
const Users = Model.User;


//Add Product : 
exports.addUser = async (req, res) => {
    const addData = await Users.insertMany(req.body);
    console.log(addData);
    res.json(addData);
};

//get all Products : 
exports.getAllUsers = async (req, res) => {

    const getAllData = await Users.find({});
    console.log(getAllData);
    res.json(getAllData);

};

//get particular Product : 
exports.getUser = async (req, res) => {
    const paramsId = req.params.id;
    const productIndex = await Users.findById({ _id: paramsId });
    console.log(productIndex);
    res.json(productIndex);
};

// replace Product : 
exports.replaceUser = async (req, res) => {
    const paramsId = req.params.id;
    const doc = await Users.findOneAndReplace({ _id: paramsId }, req.body, { new: true });
    console.log(doc);
    res.json(doc);

};

// Update Product :
exports.updateUser = async (req, res) => {
    const paramsId = req.params.id;
    const doc = await Users.findByIdAndUpdate({ _id: paramsId }, req.body, { new: true });
    console.log(doc);
    res.json(doc);
};

// Delete Product : 
exports.deleteUser = async (req, res) => {
    const paramsId = req.params.id;
    const doc = await Users.findOneAndDelete({ _id: paramsId, });
    console.log('User deleted from the DB');
    res.json({ "delete": true });
};
