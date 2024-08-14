const express = require("express");
const { login,recuperar } = require("../controllers/login");

const router = express.Router();

router.post("/login", login);
router.post("/recuperar",recuperar)

module.exports = router;