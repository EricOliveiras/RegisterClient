const user = require('../models/user');

class UserController {

  async createUser(req, res) {
    const { cpf ,email } = req.body;

    const cpfExist = await user.findOne({ where: { cpf } });
    const emailExist = await user.findOne({ where: { email } });

    if(!cpfExist && !emailExist) {
      const createUser = req.body;
      const newUser = await user.create(createUser);
  
      res.send(newUser);
    } else {
      res.status(400).send('User already exist!');
    };
  };

  async getUsers(req, res) {
    
    const getUsers = await user.findAll();

    if(getUsers.length !== 0) {
      res.status(200).send(getUsers)
    } else {
      res.status(400).send('There are no registered users!');
    }
  };

  async getUserForId(req, res) {
    const id = req.params.id
    const getUserForId = await user.findByPk(id);
  
    if(!getUserForId) {
      res.status(400).send('User not found.');
    } else {
      res.status(200).send(getUserForId);
    };
  };
  
  async changeUser(req, res) {
    const { id } = req.params;
    const getUserForId = await user.findByPk(id);
  
    if(!getUserForId) {
      res.status(400).send('User not found.');
    } else {
      const userChange = req.body;
      await user.update(userChange, { where: { id } });

      res.status(200).send(`User updated!`);
    };
  };
  
  async deleteUser(req, res) {
    const { id } = req.params;
    const getUserForId = await user.findByPk(id);
  
    if(!getUserForId) {
      res.status(400).send('User not found.');
    } else {
      await user.destroy({ where: { id } });
  
      res.status(200).send('User deleted!');
    };
  };

};

module.exports = new UserController();