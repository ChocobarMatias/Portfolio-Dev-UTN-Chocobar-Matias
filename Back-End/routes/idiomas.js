const express = require("express")
const {allLanguages, singleLanguage, createLanguages,editLanguages,eraseLanguages} = require("../controllers/idiomas")
const {verifyToken} = require("../controllers/login")
const router = express.Router()

router.get("/idiomas",allLanguages)
router.get("/idiomas/:id",singleLanguage)
router.post("/idiomas/create/",createLanguages)
router.put(`/idiomas/edit/:id`,editLanguages)
router.delete("/idiomas/delete/:id",verifyToken,eraseLanguages)

module.exports = router