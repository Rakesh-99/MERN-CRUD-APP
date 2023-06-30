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

const userSchema = new mongoose.Schema({

    "name": {
        type: 'String',
        required: true,

    },
    "email": {
        type: String,
        required: true,
        unique: [true, 'Email already registered in our server']
    },
    "gender": {
        type: String,
        required: [true, 'Gender is required '],

    },
    "age": {
        type: Number,
        required: [true, 'Age is required ']
    },
    "password": {
        type: String,
        required: [true, 'Password  can not be empty']
    }
});


// Mongoose Model :

exports.User = mongoose.model('User', userSchema);
