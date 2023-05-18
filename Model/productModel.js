const mongoose = require('mongoose');



// Mongoose Connection :


const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB Connected !');
};
main().catch(errLog => {
    console.log('The Following error is ' + errLog);
});



// Mongoose Schema :

const productSchema = new mongoose.Schema({

    "title": {
        type: 'String',
        required: true,
        unique: [true, 'Duplicate title entered']

    },
    "description": {
        type: String,
        required: true,
        unique: [true, 'Duplicate description entered']
    },
    "price": {
        type: Number,
        // min: 100,
        required: [true, 'Price filled is required '],

    },
    "ratings": {
        type: Number,
        required: [true, 'Rating field is required ']
    },
    "category": {
        type: String,
        required: [true, 'Category field is required']
    },
    "thumbnail": {
        type: String,
        required: [true, 'Thumbnail is required']
    }
});


// Mongoose Model :

exports.Product = mongoose.model('Product', productSchema);
