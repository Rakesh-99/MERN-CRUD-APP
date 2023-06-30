const express = require('express');
const userModel = require('../Controller/userController');
const router = express.Router();










// Apis :

router.post('/', userModel.addUser)

    .get('/', userModel.getAllUsers)

    .get('/:id', userModel.getUser)

    .put('/:id', userModel.replaceUser)

    .patch('/:id', userModel.updateUser)

    .delete('/:id', userModel.deleteUser)

exports.router = router;