const model = require('../models/users');

const getUsers = async (req, res) => {
    try {
        const users = await model.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await model.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} 

const createUser = async (req, res) => {
    try {
        const user = await model.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await model.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await model.deleteUser(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}