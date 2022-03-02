const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre} = req.query;
  res.json({
    msg: "Hola mundo get controlador",
    q, nombre
  });
};

const usuariosPut = (req, res = response) => {
  const {id} = req.params;
  res.json({
    msg: "Hola mundo put controlador",
    id
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "Hola mundo post controlador",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "Hola mundo delete controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
