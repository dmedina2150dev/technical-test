const DB = require('./db.json');
const { save } = require('./utils');

const getAllUsers = () => {
    return DB.users;
}

const getOneUser = (id) => {
    const user = DB.users.find((user) => user.id === id)
    return user;
}

const createNewUser = (newUser) => {
    const isReady = DB.users.findIndex((user) => user.email === newUser.email ) > -1;
    if (isReady) {
        return 'Usuario ya registrado';
    }    
    DB.users.push(newUser);
    
    save(DB);
    return newUser;
}

const updateOneUser = (id, body) => {    
    const userUpdate = DB.users.map((user) => {
        if (user.id === id) {
            user.email = body.email;
            user.lastName = body.lastName;
            user.name = body.name;
            user.rut = body.rut;
            return user;
        }
    })
    save(DB);
    const userDB = DB.users.find((user) => user.id === id);
    return userDB;
}

const deleteOneUser = (id) => {
    const userIndex = DB.users.findIndex((user) => user.id === id);
    console.log('index', userIndex)
    if(!userIndex === -1) {
        
        return false;
    }

    DB.users.splice(userIndex, 1);
    save(DB);
    return true;
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}