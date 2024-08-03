const express = require("express")
const {allFormations, singleFormation, createFormations,editFormations,eraseFormations} = require("../controllers/formaciones")
const {verifyToken} = require("../controllers/login")
const router = express.Router()

router.get("/formaciones",allFormations)
router.get("/formaciones/:id",singleFormation)
router.post("/formaciones/create/",createFormations)
router.put("/formaciones/edit/:id",editFormations)
router.delete("/formaciones/delete/:id",verifyToken,eraseFormations)

module.exports = router