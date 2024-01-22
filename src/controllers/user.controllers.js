const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { getAllUserService,
  getUserByIdService, 
  createUserService, 
  editUserByIdService, 
  deleteUserService, 
  loginService} = require('../services/user.services');


const getAll = async (req, res) => {
  try {
    const response = await getAllUserService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserByIdService(id);
    if (!response) return res.status(404).json('Usuario no existente.');
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { dni, password } = req.body;
    const userFound = loginService(dni);
    const userDni = loginService(password);
    if(!userFound) return res.status(404).json('Usuario no existente.');
    if(!userDni) return res.status(404).json('Ususario y/o contraseña incorrectos.');
    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const create = async (req, res) => {
  try {
    // const passwordHash = await bcrypt.hash(password, 10);
    const newUser = req.body;
    createUserService(newUser);
    jwt.sing({

    })
    console.log(newUser);
    res.status(201).json('Usuario creado con exito');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editById = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const queryOptions = {
      returnDocument: 'after',
    };
    const response = await editUserByIdService(id, payload, queryOptions);
    if (!response) return res.status(404).json('Usuario no existente');
    res.status(200).json('Usuario editado con exito');

  } catch (error) {
    res.status(500).json(error.message);
  }
}; 

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteUserService(id);
    if (!response) return res.status(404).json('Usuario no existente');
    res.status(204).json();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  editById,
  deleteById,
  login
};