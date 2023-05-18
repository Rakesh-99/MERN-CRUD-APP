const Model = require('../Model/productModel');
const Products = Model.Product;


//Add Product : 
exports.addProduct = async (req, res) => {
    const addData = await Products.insertMany(req.body);
    console.log(addData);
    res.json(addData);
};

//get all Products : 
exports.getAllProducts = async (req, res) => {

    const getAllData = await Products.find({});
    console.log(getAllData);
    res.json(getAllData);

};

//get particular Product : 
exports.getProduct = async (req, res) => {
    const paramsId = req.params.id;
    const productIndex = await Products.findById({ _id: paramsId });
    console.log(productIndex);
    res.json(productIndex);
};

// replace Product : 
exports.replaceProduct = async (req, res) => {
    const paramsId = req.params.id;
    const doc = await Products.findOneAndReplace({ _id: paramsId }, req.body, { new: true });
    console.log(doc);
    res.json(doc);

};

// Update Product :
exports.updateProduct = async (req, res) => {
    const paramsId = req.params.id;
    const doc = await Products.findByIdAndUpdate({ _id: paramsId }, req.body, { new: true });
    console.log(doc);
    res.json(doc);
};

// Delete Product : 
exports.deleteProduct = async (req, res) => {
    const paramsId = req.params.id;
    const doc = await Products.findOneAndDelete({ _id: paramsId, });
    console.log('Object deleted from the DB');
    res.json({ "delete": true });
};
