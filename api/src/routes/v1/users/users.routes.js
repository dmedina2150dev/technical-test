const express = require('express');
const router = express.Router();
const { 
    getAllUsers,
    getOneUser, 
    createNewUser, 
    updateOneUser, 
    deleteOneUser 
} = require('../../../controller/users/users.controller');


router
    .get('/', getAllUsers)
    .get('/:id', getOneUser)
    .post('/', createNewUser)
    .patch('/:id', updateOneUser)
    .delete('/:id', deleteOneUser);

module.exports = router;