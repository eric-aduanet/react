const { Router } = require("express");
const {
  createUser,
  userLogin,
  revalidateUser,
} = require("../controllers/auth");
const { validateFields } = require("../middlewares/validateFields");
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validateJWT");
const router = Router();

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  userLogin
);

router.get("/renew", validateJWT, revalidateUser);

module.exports = router;
