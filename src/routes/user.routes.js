const { Router } = require('express');
const { getAll, 
  getById, 
  create, 
  editById, 
  deleteById,
  login,
  } = require('../controllers/user.controllers');
const route = Router();


route.get('/getAll', getAll);

route.get('/getById/:id',getById);

route.get('/login',login);

route.post('/create', create);

route.patch('/editById/:id', editById);

route.patch('/disable/:id', editById);

route.delete('/delete/:id', deleteById);


module.exports = route;