const express = require("express");
const { singleUser, createUsers, editUsers, eraseUsers } = require("../controllers/usuarios");
const {verifyToken} = require("../controllers/login")
const router = express.Router();

router.get("/usuarios/:id", singleUser);
router.post("/usuarios/create",verifyToken, createUsers);
router.put("/usuarios/edit/:id",verifyToken, editUsers);
router.delete("/usuarios/delete/:id",verifyToken, eraseUsers);

module.exports = router;
