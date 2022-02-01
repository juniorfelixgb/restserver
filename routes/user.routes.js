const { Router } = require('express');
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", getUsers);

router.get('/:id', getUserById);

router.post("/", postUsers);

router.put("/", putUsers);

router.delete("/", deleteUsers);
