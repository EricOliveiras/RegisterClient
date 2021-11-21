const express = require('express');

const UserController = require('../controllers/userControllers');

const router = express.Router();

router.post('/newuser', UserController.createUser);
router.get('/user', UserController.getUsers);

module.exports = router;