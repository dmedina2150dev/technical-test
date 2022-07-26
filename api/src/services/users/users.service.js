const { v4: uuid } = require('uuid');
const User = require('../../database/User');


const getAllUsers = () => {
    const allUsers = User.getAllUsers();
    return allUsers;
}

const getOneUser = (id) => {
    const userSearch = User.getOneUser(id);
    return userSearch;
}

const createNewUser = (newUser) => {
    const userToSave = {
        ...newUser,
        id: uuid()
    }
    const createdUser = User.createNewUser(userToSave);
    
    return createdUser;
}

const updateOneUser = (id, newData) => {
    const userSearch = User.updateOneUser(id, newData);

    return userSearch;
}

const deleteOneUser = (id) => {
    const userDeleted = User.deleteOneUser(id);
    console.log(userDeleted)
    return userDeleted;
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}