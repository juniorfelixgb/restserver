const { response, request } = require("express");

const getUsers = (req = request, res = response, next) => {
  res.json({
    msg: "get API",
  });
};

const getUserById = (req = request, res = response, next) => {
    const id = res.params.id;
    if (!id) return res.status(404).json({ isSuccess: false, data: null, error: 'Recurso no encontrado.' });
    return res.json({
      msg: "get API",
    });
  };

const postUsers = (req = request, res = response, next) => {
  const { name, age } = req.body;
  res.json({
    msg: "post API",
    name,
    age
  });
};

const putUsers = (req = request, res = response, next) => {
  res.json({
    msg: "put API",
  });
};

const deleteUsers = (req = request, res = response, next) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  getUsers,
  getUserById,
  postUsers,
  putUsers,
  deleteUsers,
};
