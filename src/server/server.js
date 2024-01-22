const express = require ('express');
const app = express();
require('dotenv').config();
require('../dbConnection/dbConnection');
const port = parseInt(process.env.PORT) || 8000; 
const morgan = require('morgan');
const cors = require('cors')

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));

//routes
const userRoutes = require('../routes/user.routes');

//use routes
app.use('/api/users', userRoutes);

//connectiondb


app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});