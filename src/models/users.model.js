const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
    },
    lastName: {
      type: String,
      required: [true, 'El campo es requerido'],
    },
    email: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
      unique: true
    },
    dni: {
      type: Number,
      required: [true, 'El campo nombre es requerido'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
      maxLength: [30, 'El maximo es 30 caracteres'],
      minLength: [6, 'El minimo es 6 caracteres']
    },
    role: {
      type: String,
      enum: ['admin', 'client'],
      default: 'client'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
    {timestamps: true}
    );


  module.exports = model('user', userSchema);