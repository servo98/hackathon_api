const express = require('express')
const UserController = require('../controllers/userController')


const api = express.Router();

api.get('/', UserController.index);
api.get('/:id', UserController.show)
api.post('/', UserController.create);
api.put('/:id', UserController.update)
api.delete('/:id', UserController.destroy)

module.exports = api;