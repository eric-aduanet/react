const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/Usuario");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = express.response) => {
  const { email, password } = req.body;
  // Manejo de errores
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya esta registrado",
      });
    }
    user = new User(req.body);
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
    await user.save();
    const token = await generateJWT(user.id, user.name);
    res.status(201).json({ ok: true, uid: user.id, name: user.name, token });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, msg: "Por favor hable con el administrador" });
  }
};

const userLogin = async (req, res = express.response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "No existe un usuario con ese email",
      });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contrasenia es incorrecta",
      });
    }
    const token = await generateJWT(user.id, user.name);
    return res.status(200).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }

  res.status(201).json({ ok: true, msg: "Login", email, password });
};

const revalidateUser = async (
  req = express.request,
  res = express.response
) => {
  const { uid, name } = req;
  const token = await generateJWT(uid, name);
  res.json({ ok: true, token });
};

module.exports = { createUser, userLogin, revalidateUser };
