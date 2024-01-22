const User = require('../models/users.model');
const jwt = require('jsonwebtoken');

const getAllUserService = async () => {
  return await User.find();
};

const getUserByIdService = async (id) => {
  return await User.findById(id);
};

const loginService = async (dni, password ) => {
  User.findOne(dni);
  User.find(password);
}

const createUserService = async (newUser) => {
  const createUser = new User(newUser);
  return await createUser.save();
};

const editUserByIdService = async (id, payload, queryOptions) => {
  return await User.findByIdAndUpdate(id, payload, queryOptions);
};

const deleteUserService = async (id) => {
  return User.findByIdAndDelete(id)
}


module.exports = {
  getAllUserService,
  getUserByIdService,
  createUserService,
  editUserByIdService,
  deleteUserService,
  loginService
};