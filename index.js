require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('path');
const productRouter = require('./Routes/productRoutes');
const morgan = require('morgan');
const path = require('path');




//Middleware

app.use(cors());
app.use(express.json());
app.use('/products/', productRouter.router);
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});





app.listen(5000, () => {
    console.log('Server Started !');
});