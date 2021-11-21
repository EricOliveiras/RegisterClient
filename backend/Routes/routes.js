const express = require('express');

const UserController = require('../controllers/userControllers');

const router = express.Router();

router.post('/newuser', UserController.createUser);
router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getUserForId);
router.patch('/user/:id', UserController.changeUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;