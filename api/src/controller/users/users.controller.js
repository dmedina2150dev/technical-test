const { response } = require('express');
const userService = require('../../services/users/users.service');

const getAllUsers = (req, res = response) => {
    const allUsers = userService.getAllUsers();
    console.log('Todos los usuarios: ', allUsers);
    res.status(200).json(allUsers);
}

const getOneUser = (req, res) => {
    const id = req.params.id;
    const userSearch = userService.getOneUser(id);

    console.log('Usuario encontrado: ', userSearch);
    res.status(200).json({
        data: userSearch
    });
}

const createNewUser = (req, res = response) => {
    const { body } = req;
    
    const newUser = {
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        rut: body.rut,
    }

    const createdUser = userService.createNewUser(newUser);

    console.log('Usuario creado: ', createdUser);
    
    res.status(201).json({
        data: createdUser
    });
}

const updateOneUser = (req, res) => {
    const id = req.params.id;
    const { body } = req;

    const userUpdate = userService.updateOneUser(id, body);

    console.log('Usuario actualizado: ', userUpdate);

    res.status(200).json({
        data: userUpdate
    });
}

const deleteOneUser = (req, res) => {

    const id = req.params.id;
    const userDeleted = userService.deleteOneUser(id);

    console.log('Usuario eliminado: ', userDeleted);
    res.status(200).json({
        ok: true
    });
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}